// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

import { resolve }             from 'path'
import { readFile, writeFile, readFileSync } from 'fs'
import { promisify }           from 'util'
import ActionType              from './types'
import type { Model, Action }  from './types'


/// MODEL

export const initModel: Model = {
  writed: false
}


/// UPDATE

function updateFlag(model: Model = initModel, action: ActionType): Model {
  if(!action && !action.type) {
    return model
  }

  const { type, payload } = action
  
  switch(type) {

    case ActionType.WRITE_SCRIPT: {
      return {
          ...model,
        writed: true
      }
    }
      
    default: return model
  }
}

export default updateFlag 


/// ACTION

function writeScripts(): * {
  return function(dispatch): void {

    const cat     = promisify(readFile)
    const write   = promisify(writeFile)
    const pkgPath = resolve(process.cwd(), './package.json')

    function readPkg(path) {
      return new Promise(function(resolve, reject) {
        cat(path, 'utf-8')
          .then(res => JSON.parse(res.toString()))
          .then(resolve)
          .catch(reject)
      })
    }

    function rewrite(content) {
      content.scripts = {
        start: 'cross-env NODE_ENV=development yarn webpack',
        debug: 'yarn nodemon tmp/<%=name%>.js --ignore *.*',
        build: 'cross-env NODE_ENV=production yarn webpack',
        test: 'yarn test'
      }
      return write(pkgPath, JSON.stringify(content, null, '\t'))
    }

    function done() {
      dispatch({
        type: ActionType.WRITE_SCRIPT
      })
    }

    Promise.resolve(pkgPath)
      .then(readPkg)
      .then(rewrite)
      .then(done)
  }
}

export const actions = {
  writeScripts
}
