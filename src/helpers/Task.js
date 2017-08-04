// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * Task
 *
 * @class
 */

class Task {
  constructor(options = {}) {
    const { name, title, cost, actived } = options
    
    this.name     = name
    this.title    = title
    this.cost     = cost
    this.actived  = actived
  }

  map(fx: (Task) => Task): Task {
    return new Task(fx(this))
  }

  toString() {
    return this.name.toUpperCase()
  }
}

export default Task
