// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

type Handle<M, A> = (m: M, A: A) => M 

type Handles<M, A> = {
  [string]: Handle 
}

function createReducer<M, A>(initModel: M, handles: Handles): * {
  return (model: M, action: A): M => {
    const m = model || initModel

    console.log(action.type)
    
    if (
      false
        || model === undefined
        || action === undefined
        || (action !== undefined && action.type === undefined)
        || handles[action.type] === undefined
    )
      return m

    if(action.error)
      return handles[action.type](m, action)

    return {
        ...m,
        ...handles[action.type](m, action)
    }
  } 
}


export default createReducer
