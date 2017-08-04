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
import mapTaskToFlag               from 'helper/map-task-to-flag'

import Section                     from 'view/section'
import Options                     from 'view/options'
import Checker                     from 'view/checker'

import { actions }                 from 'core/configure'
import { actions as routeActions } from 'core/route'


class Configure extends Component {
  
  componentDidMount() {
    this.props.next()
    this.props.begin()

    // .then(check('NodeJs', `node --version`))
  }

  componentWillUnmount() {
    this.props.end()
  }
  
  render() {
    const { configs, environment, tasks } = this.props
    const [ taskConfigure, taskChecking ] = tasks.tasks

    const configureView = (
      <Section flag={mapTaskToFlag(taskConfigure)}
               title={taskConfigure.title}>
        <Options options={configs} />
      </Section>
    )

    const checkingView = (
      <Section flag={mapTaskToFlag(taskChecking)}
               title={taskChecking.title}>
        <Checker environment={environment} />
      </Section>
    )
    
    return (
      <Indent size={1}>
        {taskConfigure.actived ? configureView : null}
        {taskChecking.actived  ? checkingView  : null}
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

