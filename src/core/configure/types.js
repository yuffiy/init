// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Configs = {
  name:         ?string,
  target:       string | boolean,
  framework:    string,
  typed:        boolean,
  local:        boolean,
  git:          boolean,
  editorconfig: boolean,
  lodash:       boolean,
  immutable:    boolean,
  router:       boolean
}

export type Model = {
  configs: Configs,
  error:   ?Error
} 


/// ACTION

export const GET_OPTIONS_DONE: string = 'GET_OPTIONS_DONE'
export const GET_OPTIONS_FAIL: string = 'GET_OPTIONS_FAIL'

export type GetOptsDoneAction = {
  type: GET_OPTIONS_DONE,
  payload: Model
}

export type GetOptsFailAction = {
  type: GET_OPTIONS_FAIL,
  payload: Error,
  error: true
}

export type Action =
  | GetOptsDoneAction
  | GetOptsFailAction

export default {
  GET_OPTIONS_DONE,
  GET_OPTIONS_FAIL
}
