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

type State = 0 | 1 | 2

function Checker(props: Props) {
  const { name, result } = props
  const state: State = result === null
        ? 0
        : (result !== undefined
           ? 1
           : 2) 
  
  return (
    <div>
      <Process state={state} name={name} result={result} />
    </div>
  )
}

function Process(props) {
  const { state, name, result } = props
  
  switch(state) {
    case 0:
      return (
        <span>
          <Text gray>WAIT</Text> {name} Checking...
        </span>
      )
    case 1:
      return (
        <span>
          <Text green>DONE</Text> {name} Version: {result}
        </span>
      )
    case 2:
      return (
        <span>
          <Text red>FAIL</Text> {name} Can{"'"}t find
        </span>
      )
    default:
      throw new Error(`Unknow state ${state}`)
  }
}

export default Checker
