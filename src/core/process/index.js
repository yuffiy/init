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
  makebuild: 1,
  install:   1,
  rewrite:   1
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
    case ActionType.MAKEBUILD_BEGIN: {
      return {
          ...model,
        makebuild: 2
      }
    }
    case ActionType.MAKEBUILD_END: {
      return {
          ...model,
        makebuild: 3
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
    case ActionType.REWRITE_BEGIN: {
      return {
          ...model,
        rewrite: 2
      }
    }
    case ActionType.REWRITE_END: {
      return {
          ...model,
        rewrite: 3
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
  beginMakeBuild: makeProcess(ActionType.MAKEBUILD_BEGIN),
  beginInstall:   makeProcess(ActionType.INSTALL_BEGIN),
  beginRewrite:   makeProcess(ActionType.REWRITE_BEGIN),
  endConfigure:   makeProcess(ActionType.CONFIGURE_END),
  endChecking:    makeProcess(ActionType.CHECKING_END),
  endInit:        makeProcess(ActionType.INIT_END),
  endGenerate:    makeProcess(ActionType.GENERATE_END),
  endMakeBuild:   makeProcess(ActionType.MAKEBUILD_END),
  endInstall:     makeProcess(ActionType.INSTALL_END),
  endRewrite:     makeProcess(ActionType.REWRITE_END)
}
