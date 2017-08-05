// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * match-task-flag
 *
 * Match the task flag.
 */

function matchFlag(flag) {
  switch(flag) {
    case 2:
      return [{ green: true }, 'success']
    case 3:
      return [{ red:   true }, 'ooooops']
    case 1:
    default:
      return [{ gray:  true }, 'working']
  }
}

export default matchFlag
