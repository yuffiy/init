// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { execSync as exec } from 'child_process'
import ActionType from './types'
import type { Model, Action } from './types'

/// MODEL

export const initModel: Model = {
  nodejs: null,
  git:    null,
  yarn:   null
}


/// UPDATE

function updateCheckedResult(model: Model = initModel, action: Action): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action
  
  switch(type) {

    case ActionType.CHECK_NODEJS: {
      return {
          ...model,
        nodejs: payload
      }
    }

    case ActionType.CHECK_GIT: {
      return {
          ...model,
        git: payload
      }
    }

    case ActionType.CHECK_YARN: {
      return {
          ...model,
        yarn: payload
      }
    }      

    default: return model
  }
}

export default updateCheckedResult 


/// ACTION

function checkcmd(type, cmd): * {
  return function(): Action {
    let result: ?string
    
    try {
      result = exec(`${cmd} --version`).toString().trim()
    } catch(e) {
      result = undefined
    }
    
    return {
      type,
      payload: result
    }
  }
}

export const actions = {
  checkNodejs: checkcmd(ActionType.CHECK_NODEJS, 'node'),
  checkGit:    checkcmd(ActionType.CHECK_GIT, 'git'),
  checkYarn:   checkcmd(ActionType.CHECK_YARN, 'yarn')
}
