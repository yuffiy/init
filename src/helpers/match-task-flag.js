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
    case 1:
      return [{ green: true }, 'success']
    case 2:
      return [{ red:   true }, 'ooooops']
    default:
      return [{ gray:  true }, 'working']
  }
}

export default matchFlag
