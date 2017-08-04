// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

/**
 * configure
 *
 * Parse args and test environment. 
 */

import { h, Component }       from 'ink'
import { connect }            from 'ink-redux'
import { bindActionCreators } from 'redux'
import Spinner                from 'ink-spinner'

import Section                from 'view/section'
import { actions }            from 'core/configure'


class Configure extends Component {
  
  componentDidMount() {
    this.props.begin()
  }

  componentWillUnmount() {
    this.props.end()
  }
  
  render() {
    const { configs } = this.props
    
    return (
      <Section flag={2} title="Configure Application">
        <Spinner />
      </Section>
    )
  }
}

function mapStateToProps(state) {
  return state.configure
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Configure)

