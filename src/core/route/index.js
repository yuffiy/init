// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import createReducer          from 'helper/create-reducer'
import updateAt               from 'helper/update-at'
import Task                   from 'helper/Route'
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
  startAt: 0,
  routes: [
    configure,
    initialize,
    install,
    postProcessing
  ]
}


/// UPDATE

const routing: Model = createReducer(initModel, {
  
  // Turn to next route. 
  [ActionType.NEXT_ROUTE]: (_, { routes, startAt }) => {
    
    const actived: number = routes.findIndex(route => route.actived === true)
    const idx:     number = actived === -1 ? 0 : actived + 1 
    const now:     number = Date.now()

    if(actived + 1 === routes.length) return    

    return {
      startAt: now,
      routes: updateAt(routes, idx, route => ({
          ...route,
        
        actived: true,
        cost:    now - startAt
        
      }))
    }
  }
})

export default routing


/// ACTION

function next(): Action {
  return {
    type: ActionType.NEXT_ROUTE
  }
}

export const actions = {
  next
}
