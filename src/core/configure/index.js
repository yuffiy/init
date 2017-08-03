// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import argv                   from 'yargs-parser'
import matchGithubRepo        from 'core/util/match-github-repo'
import type { ThunkAction }   from 'core/util/thunk-action-type'
import type { GithubRepo }    from 'core/util/match-github-repo'

import ActionType             from './types'
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
  error: null
}


/// UPDATE

function configure(model: Model = initModel, action: Action): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action

  switch(type) {
    case ActionType.GET_OPTIONS_DONE:
      return {
          ...model,
        configs: payload
      }

    case ActionType.GET_OPTIONS_FAIL:
      return {
          ...model,
        error: payload
      }
      
    default:
      return model
  }
}

export default configure 


/// ACTION

function getOpts(): ThunkAction {
  return dispatch => {

    // Parse command args.
    
    const parsed = argv(process.argv.slice(2))
    const { _: name, ...options } = parsed    

    // Check app name.
    
    if(!name.length) {
      return {
        type:    ActionType.GET_OPTIONS_FAIL,
        payload: new Error(`Can't find any app or github repo name.`),
        error:   true
      }
    }

    // Validate name when local mode
    
    let app:   string = name[0]
    let local: string = options.local
    const matchedName: ?GithubRepo = matchGithubRepo(app)    

    if(local || matchedName === null) {
      if(/(\\|\/|\:|\*|\?|\"|\<|\>|\')/g.test(app)) {
        return {
          type:    ActionType.GET_OPTIONS_FAIL,
          payload: new Error(`Invalid app name: ${name}. App name has some special char.`),
          error:   true
        }
      }

      local = true
    } else {
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

export const actions = {
  getOpts
}
