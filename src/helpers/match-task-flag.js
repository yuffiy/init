// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * match-task-flag
 *
 * Match the task flag.
 */

function matchFlag(flag) {
  switch(true) {
    case flag === null:
      return [{ gray:  true }, 'working']
    case flag instanceof Error:
      return [{ red:   true }, 'ooooops']
    default:
      return [{ green: true }, 'success']
  }
}

export default matchFlag
