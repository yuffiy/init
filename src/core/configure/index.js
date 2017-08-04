// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { combineReducers }         from 'redux'
import argv                        from 'yargs-parser'
import { identity as id }          from 'lodash'
import matchGithubRepo             from 'helper/match-github-repo'
import createReducer               from 'helper/create-reducer'
import type { ThunkAction }        from 'helper/thunk-action-type'
import type { GithubRepo }         from 'helper/match-github-repo'
import tryCommand                  from 'helper/try-command'

import { actions as routeActions } from 'core/route'
import ActionType                  from './types'
import type { Model, Action }      from './types'
import { Configs, Environment }    from './types'


/// MODEL

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

const initEnvironment: Environment = {
  nodejs:         null,
  git:            null,
  yarn:           null,
  crossenv:       null
} 

export const initModel: Model = {
  configs:        null,
  environment:    null,
  options: {
    max:          60,
    title:        'Application Bootstrapper',
    titleVMargin: 2
  }
}


/// UPDATE

const configs = createReducer(initModel, {
  
  // Get options success
  [ActionType.GET_OPTIONS_DONE]: id,

  // Get options failed
  [ActionType.GET_OPTIONS_FAIL]: id
})

const environment = createReducer(initModel, {
  
  // Check commands
  [ActionType.CHECK_COMMAND]: ({ command, version }) => ({
    [command]: version
  })
})

export default combineReducers({
  configs,
  environment,
  options: createReducer(initModel)
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
          payload: new Error(`Invalid app name: ${name}. Name has some special char.`),
          error:   true
        })

	// Exit app.
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

    dispatch({
      
    })
  }
}

function check(command, query) {
  return dispatch => {
    tryCommand(query).then(version => {
      
      let ver: string = version === null
	  ? 'FAIL'
	  : 'PASS' + version
      
      disaptch({
	type: CHECK_COMMAND,
	payload: {
	  command,
	  version: ver
	}
      })
    }).catch(err => {
      
      // Exit app.
      dispatch(routeActions.exit(false))
    })
  }
}

function begin() {
  return dispatch => {
    dispatch({ type: ActionType.BEGIN_CONFIGURE })
    dispatch(getOpts())
  } 
}

function end() {
  return dispatch => {
    dispatch({ type: ActionType.END_CONFIGURE })
  } 
}

export const actions = {
  getOpts,
  begin,
  end,
  check
}
