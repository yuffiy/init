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

function Configs(props: Props) {
  const {
    configs
  } = props

  return configs ? <Table datas={parseData(configs)} /> : <Processing />
}

function Processing() {
  return (
    <div>
      Parsing...
    </div>
  )
}

function parseData(obj) {
  return Object.keys(obj).map(key => {
    return [startCase(key), obj[key]]
  })
}

function Table(props) {
  const { datas } = props
  
  const max = datas.reduce((acc, curr) => {
    return Math.max(acc, curr[0].length)
  }, 0)
  
  return (
    <div>
      {datas.map(data => {
        return (
          <div>
            <Label name={data[0]} max={max} />
            <span>
              <Text yellow>
                {String(data[1])}
              </Text>
            </span>
          </div>
        )
      })}    
    </div>
  )
}

function Label(props) {
  const {
    name,
    max
  } = props

  return (
    <Indent size={max - name.length}>
      <Text white>{name}: </Text>
    </Indent>
  )
}

export default Configs
