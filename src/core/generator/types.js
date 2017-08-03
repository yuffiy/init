// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  packageConfig:       boolean,
  webpackConfig:       boolean,
  babelConfig:         boolean,
  editorConfig:        boolean,
  flowConfig:          boolean,
  sourceDir:           boolean,
  sourceCoreDir:       boolean,
  sourceViewDir:       boolean,
  bootJs:              boolean,
  indexJs:             boolean,
  coreIndexJs:         boolean,
  coreExampleIndexJs:  boolean,
  coreExampleTypeJs:   boolean,
  viewIndexJs:         boolean,
  viewExampleIndexJs:  boolean,
  viewExampleStyleCss: boolean
}


/// ACTION

export const GENERATE_PACKAGECONFIG: string = Symbol()
export type GeneratePackageConfigAction = {
  type: GENERATE_PACKAGECONFIG
}
export const GENERATE_WEBPACKCONFIG: string = Symbol()
export type GenerateWebpackConfigAction = {
  type: GENERATE_WEBPACKCONFIG
}
export const GENERATE_BABELCONFIG: string = Symbol()
export type GenerateBabelConfigAction = {
  type: GENERATE_BABELCONFIG
}
export const GENERATE_EDITORCONFIG: string = Symbol()
export type GenerateEditorConfigAction = {
  type: GENERATE_EDITORCONFIG
}
export const GENERATE_FLOWCONFIG: string = Symbol()
export type GenerateFlowConfigAction = {
  type: GENERATE_FLOWCONFIG
}
export const GENERATE_SOURCEDIR: string = Symbol()
export type GenerateSourceDirAction = {
  type: GENERATE_SOURCEDIR
}
export const GENERATE_SOURCECOREDIR: string = Symbol()
export type GenerateSourceCoreDirAction = {
  type: GENERATE_SOURCECOREDIR
}
export const GENERATE_SOURCEVIEWDIR: string = Symbol()
export type GenerateSourceViewDirAction = {
  type: GENERATE_SOURCEVIEWDIR
}
export const GENERATE_BOOTJS: string = Symbol()
export type GenerateBootJsAction = {
  type: GENERATE_BOOTJS
}
export const GENERATE_INDEXJS: string = Symbol()
export type GenerateIndexJsAction = {
  type: GENERATE_INDEXJS
}
export const GENERATE_COREINDEXJS: string = Symbol()
export type GenerateCoreIndexJsAction = {
  type: GENERATE_COREINDEXJS
}
export const GENERATE_COREEXAMPLEINDEXJS: string = Symbol()
export type GenerateCoreExampleIndexJsAction = {
  type: GENERATE_COREEXAMPLEINDEXJS
}
export const GENERATE_COREEXAMPLETYPESJS: string = Symbol()
export type GenerateCoreExampleTypesJsAction = {
  type: GENERATE_COREEXAMPLETYPESJS
}
export const GENERATE_VIEWINDEXJS: string = Symbol()
export type GenerateViewIndexJsAction = {
  type: GENERATE_VIEWINDEXJS
}
export const GENERATE_VIEWEXAMPLEINDEXJS: string = Symbol()
export type GenerateViewExampleIndexJsAction = {
  type: GENERATE_VIEWEXAMPLEINDEXJS
}
export const GENERATE_VIEWEXAMPLESTYLECSS: string = Symbol()
export type GenerateViewExampleStyleCssAction = {
  type: GENERATE_VIEWEXAMPLESTYLECSS
}

export type Action =
  | GeneratePackageConfigAction
  | GenerateWebpackConfigAction
  | GenerateBabelConfigAction
  | GenerateEditorConfigAction
  | GenerateFlowConfigAction
  | GenerateSourceDirAction
  | GenerateSourceCoreDirAction
  | GenerateSourceViewDirAction
  | GenerateBootJsAction
  | GenerateIndexJsAction
  | GenerateCoreIndexJsAction
  | GenerateCoreExampleIndexJsAction
  | GenerateCoreExampleTypesJsAction
  | GenerateViewIndexJsAction
  | GenerateViewExampleIndexJsAction
  | GenerateViewExampleStyleCssAction

export default {
  GENERATE_PACKAGECONFIG,
  GENERATE_WEBPACKCONFIG,
  GENERATE_BABELCONFIG,
  GENERATE_EDITORCONFIG,
  GENERATE_FLOWCONFIG,
  GENERATE_SOURCEDIR,
  GENERATE_SOURCECOREDIR,
  GENERATE_SOURCEVIEWDIR,
  GENERATE_BOOTJS,
  GENERATE_INDEXJS,
  GENERATE_COREINDEXJS,
  GENERATE_COREEXAMPLEINDEXJS,
  GENERATE_COREEXAMPLETYPESJS,
  GENERATE_VIEWINDEXJS,
  GENERATE_VIEWEXAMPLEINDEXJS,
  GENERATE_VIEWEXAMPLESTYLECSS
}
