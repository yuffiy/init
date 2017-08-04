// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { combineReducers }    from 'redux'
import argv                   from 'yargs-parser'
import { identity as id }     from 'lodash'
import matchGithubRepo        from 'helper/match-github-repo'
import createReducer          from 'helper/create-reducer'
import type { ThunkAction }   from 'helper/thunk-action-type'
import type { GithubRepo }    from 'helper/match-github-repo'

import ActionType             from './types'
import RouteActionType        from 'core/route/types'
import type { Model, Action } from './types'


/// MODEL

export const initModel: Model = {
  configs: {
    name:         null,
    target:       'web',
    framework:    'react/redux/router',
    typed:        true,
    local:        false,
    git:          true,
    editorconfig: true,
    lodash:       true,
    immutable:    false,
    router:       true
  },
  environment: {
    nodejs:   null,
    git:      null,
    yarn:     null,
    crossenv: null
  },
  options: {
    max:          60,
    title:        'Application Bootstrapper',
    titleVMargin: 2
  }
}


/// UPDATE

const configs: $Prototype<initModel, 'configs'> = createReducer(initModel, {
  
  // Get options success
  [ActionType.GET_OPTIONS_DONE]: id,

  // Get options failed
  [ActionType.GET_OPTIONS_FAIL]: id
})

const environment: $Prototype<initModel, 'environment'> = createReducer(initModel, {
  
})

const options: $Prototype<initModel, 'environment'> = createReducer(initModel)


export default combineReducers({
  configs,
  environment,
  options
}) 


/// ACTION

function getOpts(): ThunkAction {
  return dispatch => {

    // Parse command args.
    const parsed = argv(process.argv.slice(2))
    const { _: name, ...options } = parsed    

    // Check app name.
    if(!name.length) {
      return dispatch({
        type:    ActionType.GET_OPTIONS_FAIL,
        payload: new Error(`Can't find any app or github repo name.`),
        error:   true
      })
    }

    // Validate name when local mode
    let app:   string = name[0]
    let local: string = options.local
    const matchedName: ?GithubRepo = matchGithubRepo(app)    

    if(local || matchedName === null) {

      // Check name has special chars on local mode.
      if(/(\\|\/|\:|\*|\?|\"|\<|\>|\')/g.test(app)) {
        return dispatch({
          type:    ActionType.GET_OPTIONS_FAIL,
          payload: new Error(`Invalid app name: ${name}. App name has some special char.`),
          error:   true
        })
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
    return dispatch({
      type: ActionType.GET_OPTIONS_DONE,
      payload: {
          ...initModel.configs,
          ...options,
        name:  app,
        local: local
      }
    })
  }
}

function begin() {
  return dispatch => {
    dispatch({ type: ActionType.BEGIN_CONFIGURE })
    dispatch({ type: RouteActionType.NEXT_ROUTE })
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
  end
}
