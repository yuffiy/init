// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import ActionType from './types'
import type { Model, Action } from './types'


/// MODEL

export const initModel: Model = {
  configure: 1,
  checking:  1,
  init:      1,
  generate:  1,
  install:   1,
  start:     1
}


/// UPDATE

function updateFlag(model: Model = initModel, action: ActionType): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action
  
  switch(type) {

    case ActionType.CONFIGURE_BEGIN: {
      return {
          ...model,
        configure: 2
      }
    }
    case ActionType.CONFIGURE_END: {
      return {
          ...model,
        configure: 3
      }
    }
    case ActionType.CHECKING_BEGIN: {
      return {
          ...model,
        checking: 2
      }
    }
    case ActionType.CHECKING_END: {
      return {
          ...model,
        checking: 3
      }
    }
    case ActionType.INIT_BEGIN: {
      return {
          ...model,
        init: 2
      }
    }
    case ActionType.INIT_END: {
      return {
          ...model,
        init: 3
      }
    }
    case ActionType.GENERATE_BEGIN: {
      return {
          ...model,
        generate: 2
      }
    }
    case ActionType.GENERATE_END: {
      return {
          ...model,
        generate: 3
      }
    }
    case ActionType.INSTALL_BEGIN: {
      return {
          ...model,
        install: 2
      }
    }
    case ActionType.INSTALL_END: {
      return {
          ...model,
        install: 3
      }
    }
    case ActionType.START_BEGIN: {
      return {
          ...model,
        start: 2
      }
    }
    case ActionType.START_END: {
      return {
          ...model,
        start: 3
      }
    }

    default: return model
  }
}

export default updateFlag 


/// ACTION

function makeProcess(type): * {
  return function(): ActionType {
    return {
      type
    }
  }
}

export const actions = {
  beginConfigure: makeProcess(ActionType.CONFIGURE_BEGIN),
  beginChecking:  makeProcess(ActionType.CHECKING_BEGIN),
  beginInit:      makeProcess(ActionType.INIT_BEGIN),
  beginGenerate:  makeProcess(ActionType.GENERATE_BEGIN),
  beginInstall:   makeProcess(ActionType.INSTALL_BEGIN),
  beginStart:     makeProcess(ActionType.START_BEGIN),
  endConfigure:   makeProcess(ActionType.CONFIGURE_END),
  endChecking:    makeProcess(ActionType.CHECKING_END),
  endInit:        makeProcess(ActionType.INIT_END),
  endGenerate:    makeProcess(ActionType.GENERATE_END),
  endInstall:     makeProcess(ActionType.INSTALL_END),
  endStart:       makeProcess(ActionType.START_END)
}
