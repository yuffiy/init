// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow

import type { Model as TaskModel } from 'core/task/types'


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

export type Environment = {
  [string]: Error | null | {
    command:   string,
    version:   string,
    required:  boolean
  }
}

export type Model = {
  tasks:           TaskModel,
  configs:         ?(Configs | Error),
  environment:     Environment | Error,
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
  type:    GET_OPTIONS_DONE,
  payload: Model
}

export type GetOptsFailAction = {
  type:    GET_OPTIONS_FAIL,
  payload: Error,
  error:   true
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

// Check required commands
export const CHECK_COMMAND:   string = 'CHECK_COMMAND'
export const INIT_CHECKER:    string = 'INIT_CHECKER'
export const CHECK_COMPLETED: string = 'CHECK_COMPLETED'
export const CHECK_FAIL:      string = 'CHECK_FAIL'

export type CheckCommandAction = {
  type:      CHECK_COMMAND,
  payload: {
    command: string,
    version: string
  }
}

export type InitCheckerAction = {
  type:      INIT_CHECKER,
  payload: {
    command: string
  }
}

export type CheckCompletedAction = {
  type: CHECK_COMPLETED
}

export type CheckFailAction = {
  type:    CHECK_FAIL,
  payload: Error,
  error:   true
}

// Handle task actions.
export const NEXT_CONFIGURE_TASK: string = 'NEXT_CONFIGURE_TASK'
export const CONFIGURE_TASK_DONE: string = 'CONFIGURE_TASK_DONE'
export const CONFIGURE_TASK_FAIL: string = 'CONFIGURE_TASK_FAIL'

export type TurnNextTaskAction = {
  type: NEXT_CONFIGURE_TASK
}

export type TaskDoneAction = {
  type: CONFIGURE_TASK_DONE
}

export type TaskFailAction = {
  type: CONFIGURE_TASK_FAIL
}
 
export type Action =
  | GetOptsDoneAction
  | GetOptsFailAction
  | BeginConfigureAction
  | EndConfigureAction
  | CheckCommandAction
  | CheckCompletedAction
  | InitCheckerAction
  | CheckFailAction
  | TurnNextTaskAction
  | TaskDoneAction
  | TaskFailAction

export default {
  GET_OPTIONS_DONE,
  GET_OPTIONS_FAIL,
  BEGIN_CONFIGURE,
  END_CONFIGURE,
  CHECK_COMMAND,
  INIT_CHECKER,
  CHECK_COMPLETED,
  CHECK_FAIL,
  NEXT_CONFIGURE_TASK,
  CONFIGURE_TASK_DONE,
  CONFIGURE_TASK_FAIL
}
