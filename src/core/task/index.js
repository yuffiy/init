// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import createReducer          from 'helper/create-reducer'
import updateAt               from 'helper/update-at'
import Task                   from 'helper/Task'

import ActionType             from './types'
import type { Model, Action } from './types'


/// MODEL

export const initModel: Model = {
  startAt: Date.now(),
  tasks:   []
}


/// UPDATE

const nextTask: Model = createReducer(initModel, {
  
  // Turn to next route. 
  [ActionType.NEXT_TASK]: (_, { tasks }) => {

    const actived: number = tasks.findIndex(task => task.actived === true)
    const idx:     number = actived === -1 ? 0 : actived + 1 

    if(actived + 1 === tasks.length) return    

    return {      
      tasks: updateAt(tasks, idx, task => ({
        
          ...task,
       
        actived: true
      }))
    }
  },

  // Task was success.
  [ActionType.TASK_DONE]: (_, { tasks, startAt }) => {

    const idx: number = tasks.findIndex(task => task.actived === true)
    const now: number = Date.now()

    return {
      startAt: now,
      tasks: updateAt(tasks, idx, task => ({
        
          ...task,
        
        cost: now - startAt
      }))
    }
  },

  // Task failed.
  [ActionType.TASK_FAIL]: (_, { tasks, startAt }) => {

    const idx: number = tasks.findIndex(task => task.actived === true)
    const now: number = Date.now()

    return {
      startAt: now,
      tasks: updateAt(tasks, idx, task => ({
        
          ...task,
        
        error: true 
      }))
    }
  }
})

export default nextTask


/// ACTION

function next(): Action {
  return {
    type: ActionType.NEXT_TASK
  }
}

function done(): Action {
  return {
    type: ActionType.TASK_DONE
  }
}

function fail(): Action {
  return {
    type: ActionType.TASK_FAIL
  }
}

export const actions = {
  next,
  done,
  fail
}
