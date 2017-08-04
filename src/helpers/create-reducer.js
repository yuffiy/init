// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * create-reducer
 *
 * Create reducer with freestyle.
 *
 * @param {Model} init - Init model.
 * @param {(Action, Model) => Model} handles - Handles map set. 
 * @param {Model}
 */

type Handles<M, A> = {
  [string]: (a: A, m: M) => ?M
}

function createReducer<M, A>(init: M, handles: Handles): * {
  return (model: M = init, action: A): M => {

    // Check action and handles. 
    if (
      false
        || action === undefined
        || (action !== undefined && action.type === undefined)
        || handles === undefined
        || Object.keys(handles) === 0
        || handles[action.type] === undefined
    ) return model

    // Apply handle.
    const { error, payload, type } = action
    const handle = handles[type]
    const _model = handle(payload, model)

    // Can't update model when handle return undefined.
    if(_model === undefined) return model

    // If has error, handle error by self. 
    if(error) return _model

    // Auto combine with old model.
    return {
        ...model,
        ..._model
    }
  } 
}


export default createReducer
