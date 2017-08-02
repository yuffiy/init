// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Component, Text, Indent } from 'ink'
import { connect } from 'ink-redux'
import { bindActionCreators } from 'redux'
import { startCase } from 'lodash'
import { actions } from 'core/configure'

type Props = {

}

function Checker(props: Props) {
  const { name, result } = props
  
  return (
    <div>
      <span>Checking... </span>
      {result === null ? (<span>{name}</span>) : (
        result !== undefined ? (
          <span>
            <Text green>DONE</Text> {name} Version: {result}
          </span>
        ) : (
          <span>
            <Text red>FAIL</Text> {name} Can{"'"}t find.
          </span>
        ))}
    </div>
  )
}

export default Checker
