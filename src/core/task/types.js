// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  tasks:   Array<string>,
  startAt: number
}


/// ACTION

// Turn next task. 
export const NEXT_TASK: string = 'NEXT_TASK'

export type TurnNextAction = {
  type: NEXT_TASK
}

// Complete task.
export const TASK_DONE: string = 'TASK_DONE'
export const TASK_FAIL: string = 'TASK_FAIL'

export type TaskDoneAction = {
  type: TASK_DONE
}

export type TaskFailAction = {
  type: TASK_FAIL
}
 
export type Action =
  | TurnNextAction
  | TaskDoneAction
  | TaskFailAction

export default {
  NEXT_TASK,
  TASK_DONE,
  TASK_FAIL
}
