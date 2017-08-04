// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow

import type { Model as TaskModel } from 'core/task/types'


/// MODEL

export type Model = {
  routes: TaskModel,
  flag:   ?boolean
}


/// ACTION

// Turn next router 
export const NEXT_ROUTE: string = 'NEXT_ROUTE'

export type TurnNextAction = {
  type: NEXT_ROUTE
}

// Set completed flag
export const SET_FLAG: string = 'SET_FLAG'

export type SetFlagAction = {
  type: SET_FLAG,
  payload: boolean
} 

export type Action =
  | TurnNextAction
  | SetFlagAction

export default {
  NEXT_ROUTE,
  SET_FLAG
}
