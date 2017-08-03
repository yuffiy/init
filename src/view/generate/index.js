// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Text } from 'ink'

type Props = {
  flag: boolean,
  children?: *
}

function Generate(props: Props) {
  const { flag, children } = props
  
  return (
    <div>
      {label(flag)} {children}
    </div>
  )
}

function label(flag) {
  return !flag ? (
      <Text gray>WAIT</Text>
  ) : (
      <Text green>DONE</Text>
  )
}

export default Generate
