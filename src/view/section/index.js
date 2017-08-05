// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Text, Indent } from 'ink'
import matchFlag           from 'helper/match-task-flag'

type Props = {
  title: string,
  flag: boolean,
  children?: *
}

function Section(props: Props) {
  
  const { title, flag, children, cost } = props
  const [ color, text ] = matchFlag(flag) 
  
  return (
    <div>
      <div>
        <Text {...color}>{`{ ${text} } `}</Text>
        <span>{title}</span>
        {cost !== 0 && <Text {...color}> {cost} ms</Text>}
      </div>
      <br />
      <Indent size={2}>
        {children}
      </Indent>
    </div>
  )
}

export default Section
