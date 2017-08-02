// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  nodejs: ?string,
  git:    ?string,
  yarn:   ?string,
}


/// ACTION

export const CHECK_NODEJS: string = Symbol()
export type CheckNodeJSAction = {
  type: CHECK_NODEJS,
  payload: string
}

export const CHECK_GIT: string = Symbol()
export type CheckGitAction = {
  type: CHECK_GIT,
  payload: string
}

export const CHECK_YARN: string = Symbol()
export type CheckYarnAction = {
  type: CHECK_YARN,
  payload: string
}

export type Action =
  | CheckNodeJSAction
  | CheckGitAction
  | CheckYarnAction

export default {
  CHECK_NODEJS,
  CHECK_GIT,
  CHECK_YARN
}
