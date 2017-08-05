// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { combineReducers }            from 'redux'
import argv                           from 'yargs-parser'
import { identity as id }             from 'lodash'
import matchGithubRepo                from 'helper/match-github-repo'
import createReducer                  from 'helper/create-reducer'
import type { ThunkAction }           from 'helper/thunk-action-type'
import type { GithubRepo }            from 'helper/match-github-repo'
import tryCommand                     from 'helper/try-command'
import Task                           from 'helper/Task'

import { actions as routeActions }    from 'core/route'
import taskUpdate                     from 'core/task'
import { initModel as taskInitModel } from 'core/task'
import { actions as taskActions }     from 'core/task'

import ActionType                     from './types'
import type { Model, Action }         from './types'
import { Configs, Environment }       from './types'


/// MODEL

const configure = new Task({
  name:    'configure',
  title:   'Configure Application',
  cost:    0,
  actived: false
})

const checking = new Task({
  name:    'checking',
  title:   'Check Requied Command',
  cost:    0,
  actived: false
})

const initConfigs: Configs = {
  name:           null,
  target:         'web',
  framework:      'react/redux/router',
  typed:          true,
  local:          false,
  git:            true,
  editorconfig:   true,
  lodash:         true,
  immutable:      false,
  router:         true
}

export const initModel: Model = {
  configs:        null,
  environment:    {},
  options: {
    max:          60,
    title:        'Application Bootstrapper',
    titleVMargin: 2
  },
  tasks: {
      ...taskInitModel,
    tasks: [
      configure,
      checking
    ]
  }
}


/// UPDATE

const configs = createReducer(initModel, {
  
  // Get options success.
  [ActionType.GET_OPTIONS_DONE]: id,

  // Get options failed.
  [ActionType.GET_OPTIONS_FAIL]: id
})

const environment = createReducer(initModel, {
  
  // Check commands.
  [ActionType.CHECK_COMMAND]: ({ command, version, required }) => ({
    [command]: {
      command,
      version,
      required
    }
  }),

  // Initial checker.
  [ActionType.INIT_CHECKER]: ({ command }) => ({
    [command]: null
  }),

  // Check was failed.
  [ActionType.CHECK_FAIL]: id 
})

const tasks: Model = createReducer(initModel, {
  
  // Turn to next route. 
  [ActionType.NEXT_CONFIGURE_TASK]: (_, model) => taskUpdate(
    model,
    taskActions.next()
  ),

  [ActionType.CONFIGURE_TASK_DONE]: (_, model) => taskUpdate(
    model,
    taskActions.done()
  ),

  [ActionType.CONFIGURE_TASK_FAIL]: (_, model) => taskUpdate(
    model,
    taskActions.fail()
  )
})

export default combineReducers({
  configs,
  environment,
  options: createReducer(initModel),
  tasks
}) 


/// ACTION

function getOpts(): ThunkAction {
  return dispatch => {

    // Parse command args.
    const parsed = argv(process.argv.slice(2))
    const { _: name, ...options } = parsed    

    // Check app name.
    if(!name.length) {
      dispatch({
        type:    ActionType.GET_OPTIONS_FAIL,
        payload: new Error(`\
Can't provide any app name or github repo name.

Usage:

  create-rabbit app

or

  create-rabbit user/repo 
`),
        error:   true
      })

      // Exit app.
      dispatch(fail())
      dispatch(routeActions.exit(false))
      
      return
    }

    // Validate name when local mode
    let app:   string = name[0]
    let local: string = options.local
    const matchedName: ?GithubRepo = matchGithubRepo(app)    

    if(local || matchedName === null) {

      // Check name has special chars on local mode.
      if(/(\\|\/|\:|\*|\?|\"|\<|\>|\')/g.test(app)) {
        dispatch({
          type:    ActionType.GET_OPTIONS_FAIL,
          payload: new Error(`\
Invalid app name: ${name}. Name should not have special char.
`),
          error:   true
        })

	// Exit app.
        dispatch(fail())
	dispatch(routeActions.exit(false))

	return
      }

      // Set local.
      local = true
      
    } else {
      
      // Set app name and local on remote mode.
      const [_, repo, user] = matchedName
      
      app   = [repo, user].join('/')
      local = false
    }

    // Configure options.
    dispatch({
      type: ActionType.GET_OPTIONS_DONE,
      payload: {
          ...initConfigs,
          ...options,
        name:  app,
        local: local
      }
    })

    // Turn to next task.
    dispatch(done())
    dispatch(next())
  }
}

function checkCmd(command, query, required) {
  return dispatch => {

    // Init checker, set flag on begin check process.
    dispatch({
      type: ActionType.INIT_CHECKER,
      payload: {
        command
      }
    })

    // Check command version.
    return tryCommand(query).then(version => {
      let ver: string = version === null
	  ? new Error(`${command} Can't find.`)
	  : version.trim().replace(/\n/, ' ')

      const payload = {
	command,
	version: ver,
        required
      }

      dispatch({
	type: ActionType.CHECK_COMMAND,
	payload
      })

      return payload 

    }).catch(err => {
      console.log(err)
      // Exit app.
      dispatch(routeActions.exit(false))
    })
  }
}

function checkFailed(environment) {
  return dispatch => {
    dispatch({
      type:    ActionType.CHECK_FAIL,
      payload: environment,
      error:   true
    })
    dispatch(fail())
    dispatch(routeActions.exit(false))
  }
}

function check(isNeedGit) {    
  return (dispatch, getState) => {
    
    const cmds = []
    
    return Promise.resolve([])
      .then(_ => dispatch(checkCmd('NodeJs', `node --version`, true)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('Yarn', `yarn --version`, true)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('Git', `git --version`, isNeedGit)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('cross-env', `cross-env`, false)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('Webpack', `webpack --version`, false)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('WebpackDevServer', `webpack-dev-server --version`, false)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('Jest', `jest --version`, false)))
      .then(cmd => cmds.push(cmd))
      .then(_ => dispatch(checkCmd('Flow', `flow version`, false)))
      .then(cmd => cmds.push(cmd))
      .then(_ => {
	const failed = cmds.filter(cmd => {      
	  const { version, required } = cmd
	  return required && version instanceof Error
	}, [])

	if(failed.length !== 0) { 

	  const format = failed.map(c => c.command).join(', ')
	  dispatch({
            type: ActionType.CHECK_FAIL,
            payload: new Error(`Can't find ${format}`),
            error: true
          })
	  
          dispatch(fail())
          dispatch(routeActions.exit(false))

	  return
	}

	dispatch(done())
	dispatch(routeActions.next())
	//dispatch(routeActions.exit())
      })
  }
}

function begin() {
  return dispatch => {
    dispatch({ type: ActionType.BEGIN_CONFIGURE })
    dispatch(next())
    dispatch(getOpts())
  } 
}

function end() {
  return dispatch => {
    dispatch({ type: ActionType.END_CONFIGURE })
  } 
}

function next() {
  return { type: ActionType.NEXT_CONFIGURE_TASK }
}

function done() {
  return { type: ActionType.CONFIGURE_TASK_DONE }
}

function fail() {
  return { type: ActionType.CONFIGURE_TASK_FAIL }
}

export const actions = {
  getOpts,
  begin,
  end,
  check
}
