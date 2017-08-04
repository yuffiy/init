// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

/**
 * <Configure />
 *
 * Parse args and test environment. 
 */

import { h, Component, Indent }    from 'ink'
import { connect }                 from 'ink-redux'
import { bindActionCreators }      from 'redux'

import Section                     from 'view/section'
import Options                     from 'view/options'

import { actions }                 from 'core/configure'
import { actions as routeActions } from 'core/route'


class Configure extends Component {
  
  componentDidMount() {
    this.props.next()
    this.props.begin()    
  }

  componentWillUnmount() {
    this.props.end()
  }
  
  render() {
    const { configs, environment } = this.props
    
    return (
      <Indent size={1}>
        <Section flag={configs} title="Configure Application">
          <Options options={configs} />
        </Section>
        <Section flag={environment} title="Checking Environment">
          <Options options={configs} />
        </Section>
      </Indent>
    )
  }
}

function mapStateToProps(state) {
  return state.configure
}

function mapDispatchToProps(dispatch) {
  return {
      ...bindActionCreators(actions,      dispatch),
      ...bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Configure)

