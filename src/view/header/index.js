// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Indent } from 'ink'

type Props = {
  indent: number,
  margin: number,
  children?: *
}

function Header(props: Props) {
  const {
    indent = 10,
    margin = 2,
    children
  } = props

  const space = Array(margin).fill().map(x => <br />) 
  
  return (
    <div>
      <Indent size={indent}>
        {space}
        <div>
          ------------------------
        </div>
        <div>
          {children}
        </div>
        <div>
          ------------------------
        </div>
        {space}
      </Indent>
    </div>
  )
}

export default Header

