// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

/**
 * core
 *
 * Redux store configure.
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

function foldModule(modkey) {
  return function(acc, curr) {
    const [key, module] = curr
    return {
        ...acc,
      [key]: module[modkey]
    }
  }
}

const regex = /\.\/([\w|-]+)\/index\.js$/i
const context = require.context('./', true, /index\.js$/)
const modules = context.keys().filter(path => path.match(regex)).map(path => {
  const name = path.match(regex)[1]
  return [name, context(path)]
})

const update = combineReducers({
    ...modules.reduce(foldModule('default'), {})
})

const init = {
	  ...modules.reduce(foldModule('initModel'), {})
}

const middleware = applyMiddleware(thunkMiddleware)

const enhancer = process.env.NODE_ENV === 'development'
  ? compose // window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const store = createStore(update, init, enhancer(middleware))

export default store

store.subscribe(() => {
  console.log(store.getState())
})
