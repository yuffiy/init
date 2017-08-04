// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Component, Text, Indent } from 'ink'
import { connect }                    from 'ink-redux'
import { bindActionCreators }         from 'redux'
import { startCase }                  from 'lodash'
import { actions } from 'core/configure'


type Props = {

}

class Checker extends Component {
  
  componentDidMount() {
    
    const { configs, checkRequiredCmds } = this.props

    // Git require. 
    checkRequiredCmds(configs.local === false)       
  }
  
  render() {
    
    const { configs, environment } = this.props
    
    const cmds = Object.keys(environment)
    const view = cmds.length && cmds.map(cmd => environment[cmd] === null ? (
      <div>
        <Text gray>WAIT</Text> {cmd} Checking...
      </div>
    ) : (environment[cmd] instanceof Error ? (
      <div>
        <Text red>FAIL</Text> {environment[cmd].message} 
      </div>
    ) : (
      <div>
        <Text green>PASS</Text> {cmd} {environment[cmd].version} 
      </div>
    )))
    
    return (
      <div>
        {view}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    configs:     state.configure.configs,
    environment: state.configure.environment
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Checker)
