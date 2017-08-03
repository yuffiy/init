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
  packageConfig:       false,
  webpackConfig:       false,
  babelConfig:         false,
  editorConfig:        false,
  flowConfig:          false,
  sourceDir:           false,
  sourceCoreDir:       false,
  sourceViewDir:       false,
  bootJs:              false,
  indexJs:             false,
  coreIndexJs:         false,
  coreExampleIndexJs:  false,
  coreExampleTypeJs:   false,
  viewIndexJs:         false,
  viewExampleIndexJs:  false,
  viewExampleStyleCss: false
}


/// UPDATE

function fileGenerateor(model: Model = initModel, action: Action): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action
  
  switch(type) {

    case ActionType.GENERATE_PACKAGECONFIG: {
      return {
          ...model,
        packageConfig: true
      }
    }
    case ActionType.GENERATE_WEBPACKCONFIG: {
      return {
          ...model,
        webpackConfig: true
      }
    }
    case ActionType.GENERATE_BABELCONFIG: {
      return {
          ...model,
        babelConfig: true
      }
    }
    case ActionType.GENERATE_EDITORCONFIG: {
      return {
          ...model,
        editorConfig: true
      }
    }
    case ActionType.GENERATE_FLOWCONFIG: {
      return {
          ...model,
        flowConfig: true
      }
    }
    case ActionType.GENERATE_SOURCEDIR: {
      return {
          ...model,
        sourceDir: true
      }
    }
    case ActionType.GENERATE_SOURCECOREDIR: {
      return {
          ...model,
        sourceCoreDir: true
      }
    }
    case ActionType.GENERATE_SOURCEVIEWDIR: {
      return {
          ...model,
        sourceViewDir: true
      }
    }
    case ActionType.GENERATE_BOOTJS: {
      return {
          ...model,
        bootJs: true
      }
    }
    case ActionType.GENERATE_INDEXJS: {
      return {
          ...model,
        indexJs: true
      }
    }
    case ActionType.GENERATE_COREINDEXJS: {
      return {
          ...model,
        coreIndexJs: true
      }
    }
    case ActionType.GENERATE_VIEWINDEXJS: {
      return {
          ...model,
        viewIndexJs: true
      }
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
        target.content && target.content()
        break
      }
      case 'directory': {
        mkdir(target.path)
        break
      }
      default: {
        touch(target.path, target.content, 'utf-8')
        break
      }
    }
    
    return {
      type
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
  content: () => exec('yarn init -y')
})
const webpackConfig = new GenerateTarget({
  path:    './webpack.config.js',
  type:    'command',
  content: () => {
    try {
      exec('create-builder')
    } catch(e) {
      exec('yarn create builder')
    }
  }
})
const babelConfig = new GenerateTarget({
  path:    './.babelrc',
  type:    'file',
  content: require('raw-loader!data/.babelrc.template')
})
const editorConfig = new GenerateTarget({
  path:    './.editorconfig',
  type:    'file',
  content: require('raw-loader!data/.editorconfig.template')
})
const flowConfig = new GenerateTarget({
  path:    './.flowconfig',
  type:    'file',
  content: require('raw-loader!data/.flowconfig.template')
})
const sourceDir = new GenerateTarget({
  path:    './src',
  type:    'directory',
  content: null
})
const bootJs = new GenerateTarget({
  path:    './src/boot.js',
  type:    'file',
  content: require('raw-loader!data/boot.js.template')
})
const indexJs = new GenerateTarget({
  path:    './src/index.js',
  type:    'file',
  content: require('raw-loader!data/index.js.template')
})
const sourceCoreDir = new GenerateTarget({
  path:    './src/core',
  type:    'directory',
  content: null
})
const coreIndexJs = new GenerateTarget({
  path:    './src/core/index.js',
  type:    'file',
  content: require('raw-loader!data/core.index.js.template')
})
const sourceViewDir = new GenerateTarget({
  path:    './src/view',
  type:    'directory',
  content: null
})
const viewIndexJs = new GenerateTarget({
  path:    './src/view/index.js',
  type:    'file',
  content: require('raw-loader!data/view.index.js.template')
})


export const actions = {
  generatePackageConfig:             generate(ActionType.GENERATE_PACKAGECONFIG,       packageConfig),
  generateWebpackConfig:             generate(ActionType.GENERATE_WEBPACKCONFIG,       webpackConfig),
  generateBabelConfig:               generate(ActionType.GENERATE_BABELCONFIG,         babelConfig),
  generateEditorConfig:              generate(ActionType.GENERATE_EDITORCONFIG,        editorConfig),
  generateFlowConfig:                generate(ActionType.GENERATE_FLOWCONFIG,          flowConfig),
  generateSourceDirConfig:           generate(ActionType.GENERATE_SOURCEDIR,           sourceDir),
  generateSourceCoreDirConfig:       generate(ActionType.GENERATE_SOURCECOREDIR,       sourceCoreDir),
  generateSourceViewDirConfig:       generate(ActionType.GENERATE_SOURCEVIEWDIR,       sourceViewDir),
  generateBootJsConfig:              generate(ActionType.GENERATE_BOOTJS,              bootJs),
  generateIndexJsConfig:             generate(ActionType.GENERATE_INDEXJS,             indexJs),
  generateCoreIndexJsConfig:         generate(ActionType.GENERATE_COREINDEXJS,         coreIndexJs),
  generateViewIndexJsConfig:         generate(ActionType.GENERATE_VIEWINDEXJS,         viewIndexJs),
  // generateCoreExampleIndexJsConfig:  generate(ActionType.GENERATE_COREEXAMPLEINDEXJS,  coreExampleIndexJs),
  // generateCoreExampleTypesJsConfig:  generate(ActionType.GENERATE_COREEXAMPLETYPESJS,  coreExampleTypesJs),
  // generateViewExampleIndexJsConfig:  generate(ActionType.GENERATE_VIEWEXAMPLEINDEXJS,  viewExampleIndexJs),
  // generateViewExampleStyleCssConfig: generate(ActionType.GENERATE_VIEWEXAMPLESTYLECSS, viewExampleStyleCss),
}
