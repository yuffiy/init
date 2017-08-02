// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import ActionType from './types'
import type { Model, Action, ParseArgsAction } from './types'

/// MODEL

export const initModel: Model = {
  appName:    null,
  githubRepo: null
}


/// UPDATE

function readConfig(model: Model = initModel, action: Action): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action
  
  switch(type) {

    case ActionType.CONFIGURE: {
      return payload
    }

    default: return model
  }
}

export default readConfig 


/// ACTION

function parseArgs(): ParseArgsAction {
  console.log(process.argv)
  return {
    type: ActionType.CONFIGURE,
    payload: {
      appName: 'appname',
      githubRepo: 'test/test'
    }
  }
}

export const actions = {
  parseArgs
}
