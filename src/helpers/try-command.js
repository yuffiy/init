// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow

/**
 * try-command
 *
 * Try a command if installed, get versions or null.
 */

import { exec }      from 'child_process'
import { promisify } from 'util'


function test(cmd: string): Promise<?string> {
  return new Promise(resolve => {
    promisify(exec)(cmd)
      .then(({ stdout, stderr }) => {
        if(stderr) {
          resolve(null)
          return
        }

        resolve(stdout)
      })
      .catch(err => {
        resolve(null)
      })
  })
}

export default test
