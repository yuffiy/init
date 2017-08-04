// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  routes:  Array<string>,
  startAt: number
}


/// ACTION

export const NEXT_ROUTE: string = 'NEXT_ROUTE'

export type TurnNextAction = {
  type: NEXT_ROUTE
}

export type Action =
  | TurnNextAction

export default {
  NEXT_ROUTE
}
