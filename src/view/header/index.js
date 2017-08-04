// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Indent } from 'ink'
import { connect }   from 'ink-redux'


type Props = {
  max:          number,
  title:        string,
  titleVMargin: number
}

function Header(props: Props) {
  
  const { titleVMargin, title, max } = props

  const space = Array(titleVMargin).fill(<br />)
  const hr    = Array(title.length).fill('-').join('')
  const pad   = Math.ceil((max - title.length) / 2)
  
  return (
    <div>
      <Indent size={pad}>
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

function mapStateToProps(state) {
  return state.configure.options
}

export default connect(mapStateToProps)(Header)

