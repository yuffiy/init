// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { execSync as exec }   from 'child_process'
import ActionType             from './types'
import type { Model, Action } from './types'


/// MODEL

export const initModel: Model = {
  webpack:                              false,
  webpackDevServer:                     false,
  cacheLoader:                          false,
  babelLoader:                          false,
  babelPresetEnv:                       false,
  babelPresetReact:                     false,
  babelPluginTransformObjectRestSpread: false,
  babelPluginSyntaxDynamicImport:       false,
  uglifyjsWebpackPlugin:                false,
  reactHotLoader:                       false,
  cssLoader:                            false,
  styleLoader:                          false,
  postcssLoader:                        false,
  postcssNext:                          false,
  postcssShort:                         false,
  postcssScss:                          false,
  postcssEasing:                        false,
  postcssStripInlineComments:           false,
  extractTextWebpackPlugin:             false,
  htmlWebpackPlugin:                    false,
  htmlWebpackTemplate:                  false,
  history:                              false,
  lodash:                               false,
  normalizeCss:                         false,
  react:                                false,
  reactDom:                             false,
  redux:                                false,
  reactRedux:                           false,
  reactRouter:                          false,
  reactRouterRedux:                     false,
  reduxThunk:                           false
}


/// UPDATE

function installer(model: Model = initModel, action: Action): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action
  
  switch(type) {

    case ActionType.INSTALL_WEBPACK: {
      return {
          ...model,
        webpack: true 
      }
    }
    case ActionType.INSTALL_WEBPACKDEVSERVER: {
      return {
          ...model,
        webpackDevServer: true 
      }
    }
    case ActionType.INSTALL_CACHELOADER: {
      return {
          ...model,
        cacheLoader: true 
      }
    }
    case ActionType.INSTALL_BABELLOADER: {
      return {
          ...model,
        babelLoader: true 
      }
    }
    case ActionType.INSTALL_BABELPRESETENV: {
      return {
          ...model,
        babelPresetEnv: true 
      }
    }
    case ActionType.INSTALL_BABELPRESETREACT: {
      return {
          ...model,
        babelPresetReact: true 
      }
    }
    case ActionType.INSTALL_BABELPLUGINTRANSFORMOBJECTRESTSPREAD: {
      return {
          ...model,
        babelPluginTransformObjectRestSpread: true 
      }
    }
    case ActionType.INSTALL_BABELPLUGINSYNTAXDYNAMICIMPORT: {
      return {
	        ...model,
        babelPluginSyntaxDynamicImport: true 
      }
    }
    case ActionType.INSTALL_UGLIFYJSWEBPACKPLUGIN: {
      return {
	        ...model,
        uglifyjsWebpackPlugin: true 
      }
    }
    case ActionType.INSTALL_REACTHOTLOADER: {
      return {
	        ...model,
        reactHotLoader: true 
      }
    }
    case ActionType.INSTALL_CSSLOADER: {
      return {
	        ...model,
        cssLoader: true 
      }
    }
    case ActionType.INSTALL_STYLELOADER: {
      return {
	        ...model,
        styleLoader: true 
      }
    }
    case ActionType.INSTALL_POSTCSSLOADER: {
      return {
	        ...model,
        postcssLoader: true 
      }
    }
    case ActionType.INSTALL_POSTCSSNEXT: {
      return {
	        ...model,
        postcssNext: true 
      }
    }
    case ActionType.INSTALL_POSTCSSSHORT: {
      return {
	        ...model,
        postcssShort: true 
      }
    }
    case ActionType.INSTALL_POSTCSSSCSS: {
      return {
	        ...model,
        postcssScss: true 
      }
    }
    case ActionType.INSTALL_POSTCSSEASING: {
      return {
	        ...model,
        postcssEasing: true 
      }
    }
    case ActionType.INSTALL_POSTCSSSTRIPINLINECOMMENTS: {
      return {
	        ...model,
        postcssStripInlineComments: true 
      }
    }
    case ActionType.INSTALL_EXTRACTTEXTWEBPACKPLUGIN: {
      return {
	        ...model,
        extractTextWebpackPlugin: true 
      }
    }
    case ActionType.INSTALL_HTMLWEBPACKPLUGIN: {
      return {
	        ...model,
        htmlWebpackPlugin: true 
      }
    }
    case ActionType.INSTALL_HTMLWEBPACKTEMPLATE: {
      return {
	        ...model,
        htmlWebpackTemplate: true 
      }
    }
    case ActionType.INSTALL_HISTORY: {
      return {
	        ...model,
        history: true 
      }
    }
    case ActionType.INSTALL_LODASH: {
      return {
	        ...model,
        lodash: true 
      }
    }
    case ActionType.INSTALL_NORMALIZECSS: {
      return {
	        ...model,
        normalizeCss: true 
      }
    }
    case ActionType.INSTALL_REACT: {
      return {
	        ...model,
        react: true 
      }
    }
    case ActionType.INSTALL_REACTDOM: {
      return {
	        ...model,
        reactDom: true 
      }
    }
    case ActionType.INSTALL_REDUX: {
      return {
	        ...model,
        redux: true 
      }
    }
    case ActionType.INSTALL_REACTREDUX: {
      return {
	        ...model,
        reactRedux: true 
      }
    }
    case ActionType.INSTALL_REACTROUTER: {
      return {
	        ...model,
        reactRouter: true 
      }
    }
    case ActionType.INSTALL_REACTROUTERREDUX: {
      return {
	        ...model,
        reactRouterRedux: true 
      }
    }
    case ActionType.INSTALL_REDUXTHUNK: {
      return {
	        ...model,
        reduxThunk: true 
      }
    }

    default: return model
  }
}

export default installer 


/// ACTION

function install(type, dep): * {
  return function(): Action {
    exec(`yarn add ${dep.type === 'D' ? '--dev' : ''} ${dep.name} --ignore-scripts`)
    
    return {
      type
    }
  }
}

class Dependency {
  constructor(options = {}) {
    const { type, name } = options
    
    this.type = type
    this.name = name
  }
}

const webpack                              = new Dependency({ type: 'D', name: 'webpack' }) 
const webpackDevServer                     = new Dependency({ type: 'D', name: 'webpack-dev-server' }) 
const cacheLoader                          = new Dependency({ type: 'D', name: 'cache-loader' }) 
const babelLoader                          = new Dependency({ type: 'D', name: 'babel-loader' }) 
const babelPresetEnv                       = new Dependency({ type: 'D', name: 'babel-preset-env' }) 
const babelPresetReact                     = new Dependency({ type: 'D', name: 'babel-preset-react' }) 
const babelPluginTransformObjectRestSpread = new Dependency({ type: 'D', name: 'babel-plugin-transform-object-rest-spread' }) 
const babelPluginSyntaxDynamicImport       = new Dependency({ type: 'D', name: 'babel-plugin-syntax-dynamic-import' }) 
const uglifyjsWebpackPlugin                = new Dependency({ type: 'D', name: 'uglifyjs-webpack-plugin' }) 
const reactHotLoader                       = new Dependency({ type: 'D', name: 'react-hot-loader@next' }) 
const cssLoader                            = new Dependency({ type: 'D', name: 'css-loader' }) 
const styleLoader                          = new Dependency({ type: 'D', name: 'style-loader' }) 
const postcssLoader                        = new Dependency({ type: 'D', name: 'postcss-loader' }) 
const postcssNext                          = new Dependency({ type: 'D', name: 'postcss-cssnext' }) 
const postcssShort                         = new Dependency({ type: 'D', name: 'postcss-short' }) 
const postcssScss                          = new Dependency({ type: 'D', name: 'postcss-scss' }) 
const postcssEasing                        = new Dependency({ type: 'D', name: 'postcss-easings' }) 
const postcssStripInlineComments           = new Dependency({ type: 'D', name: 'postcss-strip-inline-comments' })
const extractTextWebpackPlugin             = new Dependency({ type: 'D', name: 'extract-text-webpack-plugin' })
const htmlWebpackPlugin                    = new Dependency({ type: 'D', name: 'html-webpack-plugin' })
const htmlWebpackTemplate                  = new Dependency({ type: 'D', name: 'html-webpack-template' }) 
const history                              = new Dependency({ type: 'S', name: 'history' }) 
const lodash                               = new Dependency({ type: 'S', name: 'lodash' })
const normalizeCss                         = new Dependency({ type: 'S', name: 'normalize-css' }) 
const react                                = new Dependency({ type: 'S', name: 'react' })
const reactDom                             = new Dependency({ type: 'S', name: 'react-dom' }) 
const redux                                = new Dependency({ type: 'S', name: 'redux' })
const reactRedux                           = new Dependency({ type: 'S', name: 'react-redux' })
const reactRouter                          = new Dependency({ type: 'S', name: 'react-router' })
const reactRouterRedux                     = new Dependency({ type: 'S', name: 'react-router-redux@next' }) 
const reduxThunk                           = new Dependency({ type: 'S', name: 'redux-thunk' })

export const actions = {
  installWebpack:                              install(ActionType.INSTALL_WEBPACK,                              webpack),
  installWebpackDevServer:                     install(ActionType.INSTALL_WEBPACKDEVSERVER,                     webpackDevServer),
  installCacheLoader:                          install(ActionType.INSTALL_CACHELOADER,                          cacheLoader),
  installBabelLoader:                          install(ActionType.INSTALL_BABELLOADER,                          babelLoader),
  installBabelPresetEnv:                       install(ActionType.INSTALL_BABELPRESETENV,                       babelPresetEnv),
  installBabelPresetReact:                     install(ActionType.INSTALL_BABELPRESETREACT,                     babelPresetReact),
  installBabelPluginTransformObjectRestSpread: install(ActionType.INSTALL_BABELPLUGINTRANSFORMOBJECTRESTSPREAD, babelPluginTransformObjectRestSpread),
  installBabelPluginSyntaxDynamicImport:       install(ActionType.INSTALL_BABELPLUGINSYNTAXDYNAMICIMPORT,       babelPluginSyntaxDynamicImport),
  installUglifyjsWebpackPlugin:                install(ActionType.INSTALL_UGLIFYJSWEBPACKPLUGIN,                uglifyjsWebpackPlugin),
  installReactHotLoader:                       install(ActionType.INSTALL_REACTHOTLOADER,                       reactHotLoader),
  installCssLoader:                            install(ActionType.INSTALL_CSSLOADER,                            cssLoader),
  installStyleLoader:                          install(ActionType.INSTALL_STYLELOADER,                          styleLoader),
  installPostcssLoader:                        install(ActionType.INSTALL_POSTCSSLOADER,                        postcssLoader),
  installPostcssNext:                          install(ActionType.INSTALL_POSTCSSNEXT,                          postcssNext),
  installPostcssShort:                         install(ActionType.INSTALL_POSTCSSSHORT,                         postcssShort),
  installPostcssScss:                          install(ActionType.INSTALL_POSTCSSSCSS,                          postcssScss),
  installPostcssEasing:                        install(ActionType.INSTALL_POSTCSSEASING,                        postcssEasing),
  installPostcssStripInlineComments:           install(ActionType.INSTALL_POSTCSSSTRIPINLINECOMMENTS,           postcssStripInlineComments),
  installExtractTextWebpackPlugin:             install(ActionType.INSTALL_EXTRACTTEXTWEBPACKPLUGIN,             extractTextWebpackPlugin),
  installHtmlWebpackPlugin:                    install(ActionType.INSTALL_HTMLWEBPACKPLUGIN,                    htmlWebpackPlugin),
  installHtmlWebpackTemplate:                  install(ActionType.INSTALL_HTMLWEBPACKTEMPLATE,                  htmlWebpackTemplate),
  installHistory:                              install(ActionType.INSTALL_HISTORY,                              history),
  installLodash:                               install(ActionType.INSTALL_LODASH,                               lodash),
  installNormalizeCss:                         install(ActionType.INSTALL_NORMALIZECSS,                         normalizeCss),
  installReact:                                install(ActionType.INSTALL_REACT,                                react),
  installReactDom:                             install(ActionType.INSTALL_REACTDOM,                             reactDom),
  installRedux:                                install(ActionType.INSTALL_REDUX,                                redux),
  installReactRedux:                           install(ActionType.INSTALL_REACTREDUX,                           reactRedux),
  installReactRouter:                          install(ActionType.INSTALL_REACTROUTER,                          reactRouter),
  installReactRouterRedux:                     install(ActionType.INSTALL_REACTROUTERREDUX,                     reactRouterRedux),
  installReduxThunk:                           install(ActionType.INSTALL_REDUXTHUNK,                           reduxThunk)
}
