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
  configs: Configs | Error,
  environment: {
    nodejs:   boolean,
    git:      boolean,
    yarn:     boolean,
    crossenv: boolean 
  },
  +options: {
    +max:          number,
    +title:        string,
    +titleVMargin: number
  }
} 


/// ACTION

// Get options.
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

// Begin and end configure.
export const BEGIN_CONFIGURE: string = 'BEGIN_CONFIGURE'
export const END_CONFIGURE:   string = 'END_CONFIGURE'

export type BeginConfigureAction = {
  type: BEGIN_CONFIGURE
}

export type EndConfigureAction = {
  type: END_CONFIGURE
}

export type Action =
  | GetOptsDoneAction
  | GetOptsFailAction
  | BeginConfigureAction
  | EndConfigureAction

export default {
  GET_OPTIONS_DONE,
  GET_OPTIONS_FAIL,
  BEGIN_CONFIGURE,
  END_CONFIGURE
}
