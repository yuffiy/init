// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Component, Text, Indent } from 'ink'
import { connect }                    from 'ink-redux'
import { bindActionCreators }         from 'redux'
import { startCase }                  from 'lodash'
import ErrorView           from 'view/error-view'
import { actions } from 'core/configure'


type Props = {

}

class Checker extends Component {
  
  componentDidMount() {
    
    const { configs, environment, check } = this.props


    // Git require. 
    check(configs.local === false)       
  }
  
  render() {
    
    const { configs, environment } = this.props

    if(environment instanceof Error) return <ErrorView error={environment} /> 

    
    
    const cmds = Object.keys(environment)
    const view = cmds.length && cmds.map(key => {
      const cmd = environment[key]
      
      if(cmd === null)
        return (
          <div>
            <Text gray>{`{ checking }`}</Text> {key} Checking...
          </div>
        )

      const { version, command, required } = cmd
      const label = required ? 'required' : 'optional'
      

      if(version instanceof Error)
        return (
          <div>
            <Text red>{`{ ${label} }`}</Text> {version.message} 
          </div>
        )


      return (
        <div>
          <Text green>{`{ ${label} }`}</Text> {command} {version} 
        </div>
      )
    })
    
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
