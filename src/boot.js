// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

/**
 * Bootstrapper.
 *
 * Usually, you do not need to modify this file.
 */

import { h, render } from 'ink'


function main() {
  const Root   = require('./index').default
  const handle = require('./index').postProcess
  const target = render(<Root />)
  handle && handle(target)
}

if(module.hot) {
  module.hot.accept("./index", main)
}

main()
