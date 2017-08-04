// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

/**
 * <Options />
 *
 * Pretty print options. 
 */

import { h, Indent, Text } from 'ink'
import ErrorView           from 'view/error-view'


type Props = {
  
}

function Options(props: Props) {
  
  const { options } = props

  // Ready view.
  if(options === null) return null

  // Error View.
  if(options instanceof Error) return <ErrorView error={options} />

  // Main view. 
  const max: number = Object.keys(options).reduce((acc, key) => {
    return Math.max(acc, key.length)
  }, 0)

  const view = Object.keys(options).map(name => {
    return (
      <div>
        <Indent size={max - name.length}>
          <Text white>{name}: </Text>
        </Indent>
        <span>
          <Text yellow>
            {String(options[name])}
          </Text>
        </span>
      </div>
    )
  })
  
  return (
    <div>{view}</div>
  )
}

export default Options
