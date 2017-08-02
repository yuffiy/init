// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { execSync as exec } from 'child_process'
import ActionType from './types'
import type { Model, Action } from './types'
import {
  mkdirSync as mkdir,
  writeFileSync as touch,
  readFileSync as cat
} from 'fs'


/// MODEL

export const initModel: Model = {
  packageconfig:      false,
  babelconfig:        false,
  editorconfig:       false,
  flowconfig:         false,
  source:             false,
  bootjs:             false,
  indexjs:            false,
  coreIndexjs:        false,
  coreExampleIndexjs: false,
  coreExampleTypejs:  false,
  viewIndexjs:        false,
  viewExampleIndexjs: false,
  viewExampleTypejs:  false
}


/// UPDATE

function fileGenerateor(model: Model = initModel, action: Action): Model {
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

export default fileGenerateor 


/// ACTION

function generate(type, target): * {
  return function(): Action {
    switch(target.type) {
      case 'command': {
        exec(target.content)
      }
      case 'directory': {
        mkdir(target.path)
      }
      default: {
        touch(target.path, target.content, 'utf-8')
      }
    }
    
    return {
      type: type
    }
  }
}

class GenerateTarget {
  constructor(options = {}) {
    const { path, type, content } = options
    
    this.path    = path
    this.type    = type
    this.content = content
  }
}

const packageConfig = new GenerateTarget({
  path:    './package.json',
  type:    'command',
  content: 'yarn init -y'
})
const babelConfig = new GenerateTarget({
  path:    './.babelrc',
  type:    'file',
  content: require('raw-loader!data/.babelrc')
})
const editorConfig = new GenerateTarget({
  path:    './.editorconfig',
  type:    'file',
  content: require('raw-loader!data/.editorconfig')
})
const flowConfig = new GenerateTarget({
  path:    './.flowconfig',
  type:    'file',
  content: require('raw-loader!data/.flowconfig')
})

export const actions = {
  generatePackageConfig: generate(ActionType.GENERATE_PACKAGECONFIG, packageConfig)
}
