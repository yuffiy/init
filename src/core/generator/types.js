// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  packageConfig: boolean
}


/// ACTION

export const GENERATE_PACKAGECONFIG: string = Symbol()
export type GeneratePackageConfigAction = {
  type: GENERATE_PACKAGECONFIG
}

export type Action =
  | GeneratePackageConfigAction

export default {
  GENERATE_PACKAGECONFIG
}
