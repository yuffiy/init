// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  appName:    ?string,
  githubRepo: ?string
}


/// ACTION

export const CONFIGURE: string = Symbol()
export type ParseArgsAction = {
  type: CONFIGURE,
  payload: Configs
}

export const CONFIGED: string = Symbol()
export type ConfigedAction = {
  type: CONFIGED
}

export type Action =
  | ParseArgsAction
  | ConfigedAction

export default {
  CONFIGURE,
  CONFIGED
}
