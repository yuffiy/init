// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h }        from 'ink'
import { Provider } from 'ink-redux'
import store        from 'core'
import App          from 'view'

function Root(): React.Element<*> {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root
