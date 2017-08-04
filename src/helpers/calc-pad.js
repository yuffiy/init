// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * Calc pad left by string size.
 */

function pad(max, len) {
  return Math.ceil((max - len) / 2)
}

export default pad
