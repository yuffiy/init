// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  webpack:                              boolean,
  webpackDevServer:                     boolean,
  cacheLoader:                          boolean,
  babelLoader:                          boolean,
  babelPresetEnv:                       boolean,
  babelPresetReact:                     boolean,
  babelPluginTransformObjectRestSpread: boolean,
  babelPluginSyntaxDynamicImport:       boolean,
  uglifyjsWebpackPlugin:                boolean,
  reactHotLoader:                       boolean,
  cssLoader:                            boolean,
  styleLoader:                          boolean,
  postcssLoader:                        boolean,
  postcssNext:                          boolean,
  postcssShort:                         boolean,
  postcssScss:                          boolean,
  postcssEasing:                        boolean,
  postcssStripInlineComments:           boolean,
  extractTextWebpackPlugin:             boolean,
  htmlWebpackPlugin:                    boolean,
  htmlWebpackTemplate:                  boolean,
  history:                              boolean,
  lodash:                               boolean,
  normalizeCss:                         boolean,
  react:                                boolean,
  reactDom:                             boolean,
  redux:                                boolean,
  reactRedux:                           boolean,
  reactRouter:                          boolean,
  reactRouterRedux:                     boolean,
  reduxThunk:                           boolean
}


/// ACTION

export const INSTALL_WEBPACK: string = Symbol() 
export type InstallWebpackAction = { 
  type: INSTALL_WEBPACK
}

export const INSTALL_WEBPACKDEVSERVER: string = Symbol() 
export type InstallWebpackdevserverAction = { 
  type: INSTALL_WEBPACKDEVSERVER
}

export const INSTALL_CACHELOADER: string = Symbol() 
export type InstallCacheloaderAction = { 
  type: INSTALL_CACHELOADER
}

export const INSTALL_BABELLOADER: string = Symbol() 
export type InstallBabelloaderAction = { 
  type: INSTALL_BABELLOADER
}

export const INSTALL_BABELPRESETENV: string = Symbol() 
export type InstallBabelpresetenvAction = { 
  type: INSTALL_BABELPRESETENV
}

export const INSTALL_BABELPRESETREACT: string = Symbol() 
export type InstallBabelpresetreactAction = { 
  type: INSTALL_BABELPRESETREACT
}

export const INSTALL_BABELPLUGINTRANSFORMOBJECTRESTSPREAD: string = Symbol() 
export type InstallBabelplugintransformobjectrestspreadAction = { 
  type: INSTALL_BABELPLUGINTRANSFORMOBJECTRESTSPREAD
}

export const INSTALL_BABELPLUGINSYNTAXDYNAMICIMPORT: string = Symbol() 
export type InstallBabelpluginsyntaxdynamicimportAction = { 
  type: INSTALL_BABELPLUGINSYNTAXDYNAMICIMPORT
}

export const INSTALL_UGLIFYJSWEBPACKPLUGIN: string = Symbol() 
export type InstallUglifyjswebpackpluginAction = { 
  type: INSTALL_UGLIFYJSWEBPACKPLUGIN
}

export const INSTALL_REACTHOTLOADER: string = Symbol() 
export type InstallReacthotloaderAction = { 
  type: INSTALL_REACTHOTLOADER
}

export const INSTALL_CSSLOADER: string = Symbol() 
export type InstallCssloaderAction = { 
  type: INSTALL_CSSLOADER
}

export const INSTALL_STYLELOADER: string = Symbol() 
export type InstallStyleloaderAction = { 
  type: INSTALL_STYLELOADER
}

export const INSTALL_POSTCSSLOADER: string = Symbol() 
export type InstallPostcssloaderAction = { 
  type: INSTALL_POSTCSSLOADER
}

export const INSTALL_POSTCSSNEXT: string = Symbol() 
export type InstallPostcssnextAction = { 
  type: INSTALL_POSTCSSNEXT
}

export const INSTALL_POSTCSSSHORT: string = Symbol() 
export type InstallPostcssshortAction = { 
  type: INSTALL_POSTCSSSHORT
}

export const INSTALL_POSTCSSSCSS: string = Symbol() 
export type InstallPostcssscssAction = { 
  type: INSTALL_POSTCSSSCSS
}

export const INSTALL_POSTCSSEASING: string = Symbol() 
export type InstallPostcsseasingAction = { 
  type: INSTALL_POSTCSSEASING
}

export const INSTALL_POSTCSSSTRIPINLINECOMMENTS: string = Symbol() 
export type InstallPostcssstripinlinecommentsAction = { 
  type: INSTALL_POSTCSSSTRIPINLINECOMMENTS
}

export const INSTALL_EXTRACTTEXTWEBPACKPLUGIN: string = Symbol() 
export type InstallExtracttextwebpackpluginAction = { 
  type: INSTALL_EXTRACTTEXTWEBPACKPLUGIN
}

export const INSTALL_HTMLWEBPACKPLUGIN: string = Symbol() 
export type InstallHtmlwebpackpluginAction = { 
  type: INSTALL_HTMLWEBPACKPLUGIN
}

export const INSTALL_HTMLWEBPACKTEMPLATE: string = Symbol() 
export type InstallHtmlwebpacktemplateAction = { 
  type: INSTALL_HTMLWEBPACKTEMPLATE
}

export const INSTALL_HISTORY: string = Symbol() 
export type InstallHistoryAction = { 
  type: INSTALL_HISTORY
}

export const INSTALL_LODASH: string = Symbol() 
export type InstallLodashAction = { 
  type: INSTALL_LODASH
}

export const INSTALL_NORMALIZECSS: string = Symbol() 
export type InstallNormalizecssAction = { 
  type: INSTALL_NORMALIZECSS
}

export const INSTALL_REACT: string = Symbol() 
export type InstallReactAction = { 
  type: INSTALL_REACT
}

export const INSTALL_REACTDOM: string = Symbol() 
export type InstallReactdomAction = { 
  type: INSTALL_REACTDOM
}

export const INSTALL_REDUX: string = Symbol() 
export type InstallReduxAction = { 
  type: INSTALL_REDUX
}

export const INSTALL_REACTREDUX: string = Symbol() 
export type InstallReactreduxAction = { 
  type: INSTALL_REACTREDUX
}

export const INSTALL_REACTROUTER: string = Symbol() 
export type InstallReactrouterAction = { 
  type: INSTALL_REACTROUTER
}

export const INSTALL_REACTROUTERREDUX: string = Symbol() 
export type InstallReactrouterreduxAction = { 
  type: INSTALL_REACTROUTERREDUX
}

export const INSTALL_REDUXTHUNK: string = Symbol() 
export type InstallReduxthunkAction = { 
  type: INSTALL_REDUXTHUNK
}

export type Action =
  | InstallWebpackAction
  | InstallWebpackdevserverAction
  | InstallCacheloaderAction
  | InstallBabelloaderAction
  | InstallBabelpresetenvAction
  | InstallBabelpresetreactAction
  | InstallBabelplugintransformobjectrestspreadAction
  | InstallBabelpluginsyntaxdynamicimportAction
  | InstallUglifyjswebpackpluginAction
  | InstallReacthotloaderAction
  | InstallCssloaderAction
  | InstallStyleloaderAction
  | InstallPostcssloaderAction
  | InstallPostcssnextAction
  | InstallPostcssshortAction
  | InstallPostcssscssAction
  | InstallPostcsseasingAction
  | InstallPostcssstripinlinecommentsAction
  | InstallExtracttextwebpackpluginAction
  | InstallHtmlwebpackpluginAction
  | InstallHtmlwebpacktemplateAction
  | InstallHistoryAction
  | InstallLodashAction
  | InstallNormalizecssAction
  | InstallReactAction
  | InstallReactdomAction
  | InstallReduxAction
  | InstallReactreduxAction
  | InstallReactrouterAction
  | InstallReactrouterreduxAction
  | InstallReduxthunkAction

export default {
  INSTALL_WEBPACK,
  INSTALL_WEBPACKDEVSERVER,
  INSTALL_CACHELOADER,
  INSTALL_BABELLOADER,
  INSTALL_BABELPRESETENV,
  INSTALL_BABELPRESETREACT,
  INSTALL_BABELPLUGINTRANSFORMOBJECTRESTSPREAD,
  INSTALL_BABELPLUGINSYNTAXDYNAMICIMPORT,
  INSTALL_UGLIFYJSWEBPACKPLUGIN,
  INSTALL_REACTHOTLOADER,
  INSTALL_CSSLOADER,
  INSTALL_STYLELOADER,
  INSTALL_POSTCSSLOADER,
  INSTALL_POSTCSSNEXT,
  INSTALL_POSTCSSSHORT,
  INSTALL_POSTCSSSCSS,
  INSTALL_POSTCSSEASING,
  INSTALL_POSTCSSSTRIPINLINECOMMENTS,
  INSTALL_EXTRACTTEXTWEBPACKPLUGIN,
  INSTALL_HTMLWEBPACKPLUGIN,
  INSTALL_HTMLWEBPACKTEMPLATE,
  INSTALL_HISTORY,
  INSTALL_LODASH,
  INSTALL_NORMALIZECSS,
  INSTALL_REACT,
  INSTALL_REACTDOM,
  INSTALL_REDUX,
  INSTALL_REACTREDUX,
  INSTALL_REACTROUTER,
  INSTALL_REACTROUTERREDUX,
  INSTALL_REDUXTHUNK
}
