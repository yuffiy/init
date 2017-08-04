// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * thunk-action-type
 *
 * Redux thunk action type defines.
 */

export type GetState = () => State
export type ThunkAction = (dispatch: Dispatch, getState?: GetState) => any
export type PromiseAction = Promise<Action>
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any
