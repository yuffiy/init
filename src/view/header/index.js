// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Indent } from 'ink'

type Props = {
  indent: number,
  margin: number,
  title:  string
}

function Header(props: Props) {
  const {
    indent = 10,
    margin = 2,
    title
  } = props

  const space = Array(margin).fill(<br />)
  const hr = Array(title.length).fill('-').join('')
  
  return (
    <div>
      <Indent size={indent}>
        {space}
        <div>
          {hr}
        </div>
        <div>
          {title}
        </div>
        <div>
          {hr}
        </div>
        {space}
      </Indent>
    </div>
  )
}

export default Header

