// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Component, Text, Indent } from 'ink'
import { connect } from 'ink-redux'
import { bindActionCreators } from 'redux'

import Header  from 'view/header'
import Section from 'view/section'
import Configs from 'view/configs'
import Checker from 'view/checker'

import { actions as configure } from 'core/configure'
import { actions as checking }  from 'core/checking'
import { actions as processes } from 'core/process'
import { actions as generator } from 'core/generator'


export class App extends Component {
  componentDidMount() {
    const {
      parseArgs,
      configed,
      checkNodejs,
      checkGit,
      checkYarn,
      generatePackageConfig,
      beginConfigure,
      endConfigure,
      beginChecking,
      endChecking,
      beginInit,
      endInit
    } = this.props

    Promise.resolve()
      .then(beginConfigure)
      .then(parseArgs)
      .then(endConfigure)
      .then(beginChecking)
      .then(checkNodejs)
      .then(checkGit)
      .then(checkYarn)
      .then(endChecking)
      .then(beginInit)
      .then(generatePackageConfig)
      .then(endInit)
      .then()
      .catch(err => {
        console.error(err)
        done()
      })
      .then(done)
  }
  render() {
    const {
      configure,
      process: {
        configure: configureFlag,
        checking:  checkingFlag,
        init:      initFlag,
        generate:  generateFlag,
        install:   installFlag,
        start:     startFlag
      },
      checking: {
        nodejs,
        git,
        yarn
      }
    } = this.props

    
    return (
      <div>
        <Header indent={10}>
          Application Bootstrapper
        </Header>

        <Section flag={configureFlag} title="Configure Application">
          <Configs configs={configure} />
        </Section>

        <Section flag={checkingFlag} title="Check Commands">
          <Checker name="Git" result={git} />
          <Checker name="NodeJs" result={nodejs} />
          <Checker name="Yarn" result={yarn} />
        </Section>

        <Section flag={initFlag} title="Init Package Config">
          <span>Generate {"package.json"} via Yarn...</span>
        </Section>

        {/*
        <Section title="Generate Files">
          <Generate type="file" path=".babelrc" />
          <Generate type="file" path=".editorconfig" />
          <Generate type="file" path=".flowconfig" />
          <Generate type="directory" path="src" />
          <Generate type="file" path="src/boot.js" />
          <Generate type="file" path="src/index.js" />
          <Generate type="file" path="src/core/index.js" />
          <Generate type="file" path="src/core/example/index.js" />
          <Generate type="file" path="src/core/example/type.js" />
          <Generate type="file" path="src/view/index.js" />
          <Generate type="file" path="src/view/example/index.js" />
          <Generate type="file" path="src/view/example/style.css" />
        </Section>

        <Section title="Build Builder">
          
        </Section>

        <Section title="Install Dependencies">
          
        </Section>
        */}
      </div>
    )
  }
}

function done() {
  process.exit(0)
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
      ...bindActionCreators(configure, dispatch),
      ...bindActionCreators(checking,  dispatch),
      ...bindActionCreators(processes, dispatch),
      ...bindActionCreators(generator, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
