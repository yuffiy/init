// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow
// @jsx h

import { h, Component, Text, Indent } from 'ink'
import { connect } from 'ink-redux'
import { bindActionCreators } from 'redux'

import Header   from 'view/header'
import Section  from 'view/section'
import Configs  from 'view/configs'
import Checker  from 'view/checker'
import Generate from 'view/generate'
import Install  from 'view/install'

import { actions as configure } from 'core/configure'
import { actions as checking }  from 'core/checking'
import { actions as processes } from 'core/process'
import { actions as generator } from 'core/generator'
import { actions as install }   from 'core/install'
import { actions as rewrite }   from 'core/rewrite'

export class App extends Component {
  componentDidMount() {
    const {
      getOpts,
      checkNodejs,
      checkGit,
      checkYarn,
      generatePackageConfig,
      generateWebpackConfig,
      generateBabelConfig,
      generateEditorConfig,
      generateFlowConfig,
      generateSourceDirConfig,
      generateSourceCoreDirConfig,
      generateSourceViewDirConfig,
      generateBootJsConfig,
      generateIndexJsConfig,
      generateCoreIndexJsConfig,
      generateViewIndexJsConfig,
      installWebpack,
      installWebpackDevServer,
      installCacheLoader,
      installBabelLoader,
      installBabelPresetEnv,
      installBabelPresetReact,
      installBabelPluginTransformObjectRestSpread,
      installBabelPluginSyntaxDynamicImport,
      installUglifyjsWebpackPlugin,
      installReactHotLoader,
      installCssLoader,
      installStyleLoader,
      installPostcssLoader,
      installPostcssNext,
      installPostcssShort,
      installPostcssScss,
      installPostcssEasing,
      installPostcssStripInlineComments,
      installExtractTextWebpackPlugin,
      installHtmlWebpackPlugin,
      installHtmlWebpackTemplate,
      installHistory,
      installLodash,
      installNormalizeCss,
      installReact,
      installReactDom,
      installRedux,
      installReactRedux,
      installReactRouter,
      installReactRouterRedux,
      installReduxThunk,
      beginConfigure,
      endConfigure,
      beginChecking,
      endChecking,
      beginInit,
      endInit,
      beginGenerate,
      endGenerate,
      beginMakeBuild,
      endMakeBuild,
      beginInstall,
      endInstall,
      beginRewrite,
      endRewrite,
      writeScripts
    } = this.props

    Promise.resolve()
      .then(beginConfigure)
      .then(getOpts)
      .then(endConfigure)
      // .then(beginChecking)
      // .then(checkNodejs)
      // .then(checkGit)
      // .then(checkYarn)
      // .then(endChecking)
      // .then(beginInit)
      // .then(generatePackageConfig)
      // .then(endInit)
      // .then(beginGenerate)
      // .then(generateBabelConfig)
      // .then(generateEditorConfig)
      // .then(generateFlowConfig)
      // .then(generateSourceDirConfig)
      // .then(generateBootJsConfig)
      // .then(generateIndexJsConfig)
      // .then(generateSourceCoreDirConfig)
      // .then(generateCoreIndexJsConfig)
      // .then(generateSourceViewDirConfig)
      // .then(generateViewIndexJsConfig)
      // .then(endGenerate)
      // .then(beginInstall)
      // .then(installWebpack)
      // .then(installWebpackDevServer)
      // .then(installCacheLoader)
      // .then(installBabelLoader)
      // .then(installBabelPresetEnv)
      // .then(installBabelPresetReact)
      // .then(installBabelPluginTransformObjectRestSpread)
      // .then(installBabelPluginSyntaxDynamicImport)
      // .then(installUglifyjsWebpackPlugin)
      // .then(installReactHotLoader)
      // .then(installCssLoader)
      // .then(installStyleLoader)
      // .then(installPostcssLoader)
      // .then(installPostcssNext)
      // .then(installPostcssShort)
      // .then(installPostcssScss)
      // .then(installPostcssEasing)
      // .then(installPostcssStripInlineComments)
      // .then(installExtractTextWebpackPlugin)
      // .then(installHtmlWebpackPlugin)
      // .then(installHtmlWebpackTemplate)
      // .then(installHistory)
      // .then(installLodash)
      // .then(installNormalizeCss)
      // .then(installReact)
      // .then(installReactDom)
      // .then(installRedux)
      // .then(installReactRedux)
      // .then(installReactRouter)
      // .then(installReactRouterRedux)
      // .then(installReduxThunk)
      // .then(endInstall)
      // .then(beginMakeBuild)
      // .then(generateWebpackConfig)
      // .then(endMakeBuild)
      // .then(beginRewrite)
      // .then(writeScripts)
      // .then(endRewrite)
      .catch(emitError(done))
    //.then(done)
  }
  render() {
    const {
      configure: {
	configs,
	error
      },
      process: {
        configure: configureFlag,
        checking:  checkingFlag,
        init:      initFlag,
        generate:  generateFlag,
        makebuild: makebuildFlag,
        install:   installFlag,
        rewrite:   rewriteFlag
      },      
      checking: {
        nodejs,
        git,
        yarn
      },
      generator: {
        packageConfig,
        webpackConfig,
        babelConfig,
        editorConfig,
        flowConfig,
        sourceDir,
        sourceCoreDir,
        sourceViewDir,
        bootJs,
        indexJs,
        coreIndexJs,
        viewIndexJs,
      },
      install: {
        webpack,
        webpackDevServer,
        cacheLoader,
        babelLoader,
        babelPresetEnv,
        babelPresetReact,
        babelPluginTransformObjectRestSpread,
        babelPluginSyntaxDynamicImport,
        uglifyjsWebpackPlugin,
        reactHotLoader,
        cssLoader,
        styleLoader,
        postcssLoader,
        postcssNext,
        postcssShort,
        postcssScss,
        postcssEasing,
        postcssStripInlineComments,
        extractTextWebpackPlugin,
        htmlWebpackPlugin,
        htmlWebpackTemplate,
        history,
        lodash,
        normalizeCss,
        react,
        reactDom,
        redux,
        reactRedux,
        reactRouter,
        reactRouterRedux,
        reduxThunk
      },
      rewrite: {
        writed
      }
    } = this.props
    
    return (
      <div>
        <Header indent={10} title="Rabbit Application Bootstrapper" />

        <Section flag={configureFlag} title="Configure Application">
          <Configs configs={configs} />
        </Section>

        <Section flag={checkingFlag} title="Check Commands">
          <Checker name="Git" result={git} />
          <Checker name="NodeJs" result={nodejs} />
          <Checker name="Yarn" result={yarn} />
        </Section>

        <Section flag={initFlag} title="Init Package Config">
          <Generate flag={packageConfig}>
            Generate {"package.json"} via Yarn...
          </Generate>
        </Section>

        <Section flag={generateFlag} title="Generate Files">
          <Generate flag={babelConfig}>
            Generate File <Indent size={5}>{"./.babelrc"}</Indent>
          </Generate>
          <Generate flag={editorConfig}>
            Generate File <Indent size={5}>{"./.editorconfig"}</Indent>
          </Generate>
          <Generate flag={flowConfig}>
            Generate File <Indent size={5}>{"./.flowconfig"}</Indent>
          </Generate>
          <Generate flag={sourceDir}>
            Generate Directory {"./src"}
          </Generate>
          <Generate flag={bootJs}>
            Generate File <Indent size={5}>{"./src/boot.js"}</Indent>
          </Generate>
          <Generate flag={indexJs}>
            Generate File <Indent size={5}>{"./src/index.js"}</Indent>
          </Generate>
          <Generate flag={sourceCoreDir}>
            Generate Directory {"./src/core"}
          </Generate>
          <Generate flag={coreIndexJs}>
            Generate File <Indent size={5}>{"./src/core/index.js"}</Indent>
          </Generate>
          <Generate flag={sourceViewDir}>
            Generate Directory <Indent size={0}>{"./src/view"}</Indent>
          </Generate>
          <Generate flag={viewIndexJs}>
            Generate File <Indent size={5}>{"./src/view/index.js"}</Indent>
          </Generate>
        </Section>

        <Section flag={installFlag} title="Install Dependencies">
          <div>
            <Indent size={0}>STAT</Indent>
            <Indent size={2}>DEPENDENCY</Indent>
          </div>
          <div>
            <Indent size={0}>====</Indent>
            <Indent size={2}>==========</Indent>
          </div>
          <Install flag={webpack} name="webpack" />
          <Install flag={webpackDevServer} name="webpack-dev-server" />
          <Install flag={cacheLoader} name="cache-loader" />
          <Install flag={babelLoader} name="babel-loader" />
          <Install flag={babelPresetEnv} name="babel-preset-env" />
          <Install flag={babelPresetReact} name="babel-preset-react" />
          <Install flag={babelPluginTransformObjectRestSpread} name="babel-plugin-transform-object-rest-spread"  />
          <Install flag={babelPluginSyntaxDynamicImport} name="babel-plugin-syntax-dynamic-import"  />
          <Install flag={uglifyjsWebpackPlugin} name="uglifyjs-webpack-plugin" />
          <Install flag={reactHotLoader} name="react-hot-loader@next" />
          <Install flag={cssLoader} name="css-loader" />
          <Install flag={styleLoader} name="style-loader" />
          <Install flag={postcssLoader} name="postcss-loader" />
          <Install flag={postcssNext} name="postcss-next" />
          <Install flag={postcssShort} name="postcss-short" />
          <Install flag={postcssScss} name="postcss-scss" />
          <Install flag={postcssEasing} name="postcss-easing" />
          <Install flag={postcssStripInlineComments} name="postcss-strip-inline-comments" />
          <Install flag={extractTextWebpackPlugin} name="extract-text-webpack-plugin" />
          <Install flag={htmlWebpackPlugin} name="html-webpack-plugin" />
          <Install flag={htmlWebpackTemplate} name="html-webpack-template" />
          <Install flag={history} name="history" />
          <Install flag={lodash} name="lodash" />
          <Install flag={normalizeCss} name="normalize-css" />
          <Install flag={react} name="react" />
          <Install flag={reactDom} name="react-dom" />
          <Install flag={redux} name="redux" />
          <Install flag={reactRedux} name="react-redux" />
          <Install flag={reactRouter} name="react-router" />
          <Install flag={reactRouterRedux} name="react-router-redux@next" />
          <Install flag={reduxThunk} name="redux-thunk" />
        </Section>

        <Section flag={makebuildFlag} title="Build Builder">
          <Generate flag={webpackConfig}>
            Generate {"webpack.config.json"} via create-builder...
          </Generate>
        </Section>

        <Section flag={rewriteFlag} title="Write Scripts">
          <Generate flag={writed}>
            Inject scripts to {"package.json"}
          </Generate>
        </Section>

        <Section flag={rewriteFlag} title="Write Scripts">
          <Text green>Done, Type C-c to exit</Text>
        </Section>
      </div>
    )
  }
}

function done() {
  process.exit(0)
}

function emitError(done) {
  return function(err) {
    throw err
    process.exit(1)
    return
  }
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
      ...bindActionCreators(install,   dispatch),
      ...bindActionCreators(rewrite,   dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
