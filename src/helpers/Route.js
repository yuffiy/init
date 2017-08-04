// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * Route
 *
 * @class
 */

class Route {
  constructor(options = {}) {
    const { name, title, cost, actived } = options
    
    this.name    = name
    this.title   = title
    this.cost    = cost
    this.actived = actived
  }

  map(fx: (Route) => Route): Route {
    return new Route(fx(this))
  }

  toString() {
    return this.name.toUpperCase()
  }
}

export default Route
