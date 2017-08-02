// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Text, Indent } from 'ink'

type Props = {
  title: string,
  flag: boolean,
  children?: *
}

function Section(props: Props) {
  const { title, flag, children } = props
  
  return flag && flag <= 1 ? null : (
    <div>
      <div>
        <Text cyan>[RABBIT] </Text>
        <span>{title}</span>
      </div>
      <br />
      <Indent size={1}>
        {children}
      </Indent>
    </div>
  )
}

export default Section
