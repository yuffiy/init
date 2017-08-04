// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { combineReducers }    from 'redux'
import { identity as id }     from 'lodash'
import createReducer          from 'helper/create-reducer'
import updateAt               from 'helper/update-at'
import Task                   from 'helper/Task'

import ActionType             from './types'
import type { Model, Action } from './types'


/// MODEL

const configure = new Task({
  name:    'configure',
  title:   'Configure Application',
  cost:    0,
  actived: false
})

const initialize = new Task({
  name:    'Initialize',
  title:   'Initialize Application',
  cost:    0,
  actived: false
})

const install = new Task({
  name:    'Install',
  title:   'Install Dependencies',
  cost:    0,
  actived: false
})

const postProcessing = new Task({
  name:    'PostProcessing',
  title:   'PostProcessing',
  cost:    0,
  actived: false
})

export const initModel: Model = {
  flag: null,
  routes: {
    startAt: 0,
    tasks: [
      configure,
      initialize,
      install,
      postProcessing
    ]
  }
}


/// UPDATE

const routes: Model = createReducer(initModel, {
  
  // Turn to next route. 
  [ActionType.NEXT_ROUTE]: (_, { tasks, startAt }) => {

    const actived: number = tasks.findIndex(route => route.actived === true)
    const idx:     number = actived === -1 ? 0 : actived + 1 
    const now:     number = Date.now()

    if(actived + 1 === tasks.length) return    

    return {
      startAt: now,
      tasks: updateAt(tasks, idx, route => ({
        
          ...route,
        
        actived: true,
        cost:    now - startAt
      }))
    }
  }
})

const flag: Model = createReducer(initModel, {
  // Set completed flag.
  [ActionType.SET_FLAG]: id
})

export default combineReducers({
  routes,
  flag
})


/// ACTION

function next(): Action {
  return {
    type: ActionType.NEXT_ROUTE
  }
}

function exit(flag): Action {
  return dispatch => {
    dispatch({
      type: ActionType.SET_FLAG,
      payload: flag
    })

    process.nextTick(() => {
      process.exit(Number(!flag))
    })
  }
}

export const actions = {
  next,
  exit
}
