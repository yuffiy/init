// -*- mode: js -*-
// -*- coding: utf-8 -*-


/**
 * Bootstrapper.
 *
 * Usually, you do not need to modify this file.
 */
function main() {
  require('./index').default()  
}

if(module.hot) {
  module.hot.accept("./index", main)
}

main()
