// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * map-task-to-flag
 */

function mapper(task) {
  if(task.error)    return 2
  if(task.cost > 0) return 1
  return 0
}

export default mapper
