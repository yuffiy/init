// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Text, Indent } from 'ink'
import Spinner             from 'ink-spinner'


type Props = {

}

function Install(props: Props) {
  const { name, flag } = props
  
  return !flag ? (
    <div>
      <Indent size={0}>
        <Text gray>WAIT</Text>
      </Indent>
      <Indent size={3}>{name}</Indent>
    </div>
  ) : (
    <div>
      <Indent size={0}>
        <Text green>DONE</Text>
      </Indent>
      <Indent size={3}>{name}</Indent>
    </div>
  )
}

export default Install
