// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Indent, Text } from 'ink'
import { connect }         from 'ink-redux'
import pad                 from 'helper/calc-pad'

type Props = {
  
}

export function Router(props: Props) {
  
  const { routes, flag, max } = props

  if(flag !== null) {
    return (
      <div>
        <Indent size={pad(max, 4)}>
          <Text green={ flag === true }
                red={ flag === false }>
            { flag ? 'DONE' : 'FAIL' }
          </Text>
        </Indent>
        <br />
        <br />
      </div>
    )
  }

  
  const len = routes.reduce((acc, route) => acc + String(route).length + 2, 0)

  const routesView = routes.map(route => (
    <Text gray={route.actived === false}
          green={route.actived === true}>
      <span> {String(route)} </span>
    </Text>
  ))

  return (
    <div>
      <Indent size={pad(max, len)}>
        {routesView}
      </Indent>
      <br />
      <br />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    routes: state.route.routes.tasks,
    flag: state.route.flag,
    max: state.configure.options.max
  }
}

export default connect(mapStateToProps)(Router)
