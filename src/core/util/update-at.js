// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * update-at
 *
 * Immutable update array at index.
 */

function updateAt<T>(array: Array<T>, index: number, callback: T => T): Array<T> {
  const elem: T = array[index]
  const mappable: boolean = typeof elem.map === 'function'
  
  return [
      ...array.slice(0, index),
    (mappable
     ? elem.map(callback)
     : callback(elem)),
      ...array.slice(index + 1)
  ]
}

export default updateAt
