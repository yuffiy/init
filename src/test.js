// -*- mode: js -*-
// -*- coding: utf-8 -*-

import fs from 'fs'
import path from 'path'
import { execSync as exec } from 'child_process'

const ROOT: string = process.cwd()

function checkCommandVersion(cmd: string): string {
  try {
    const version: Buffer = exec(cmd + ' --version')
    return version.toString()
  } catch(e) {
    return null
  }
}

function main() {
  console.log('Checking... git')
  const gitVersion = checkCommandVersion('git')
  console.log(gitVersion)
  console.log('Checking... nodejs')
  const nodeVersion = checkCommandVersion('node')
  console.log(nodeVersion)
  console.log('Checking... npm')
  const npmVersion  = checkCommandVersion('npm')
  console.log(npmVersion)
  console.log('Checking... yarn')
  const yarnVersion = checkCommandVersion('yarn')
  console.log(yarnVersion)
  //process.exit(0)
  
  // Init application.
  console.log('Generate .git.')
  exec(`git init`)
  
  console.log('Generate package.json.')
  exec(`yarn init --yes`)

  // Create required directories.
  console.log('Generate source dir.')
  //fs.mkdirSync(path.resolve(ROOT, 'src'))
  
  // Create required files.
  console.log('Generate babelrc.')
  const babelrc = require('raw-loader!./templates/.babelrc')
  fs.writeFileSync(path.resolve(ROOT, '.babelrc'), babelrc, 'utf-8')

  // console.log('Generate editorconfig.')
  // const editorconfig = fs.readFileSync(require('raw-loader!./templates/.editorconfig'))
  // fs.writeFileSync(path.resolve(ROOT, '.editorconfig'), editorconfig, 'utf-8')

  // console.log('Generate flowconfig.')
  // const flowconfig = fs.readFileSync(require('raw-loader!./templates/.flowconfig'))
  // fs.writeFileSync(path.resolve(ROOT, '.flowconfig'), flowconfig, 'utf-8')

  // console.log('Generate boot.js.')
  // const boot = fs.readFileSync(require('raw-loader!./templates/boot.js'))
  // fs.writeFileSync(path.resolve(ROOT, 'src/boot.js'), boot, 'utf-8')

  // console.log('Generate index.js.')
  // const index = fs.readFileSync(require('raw-loader!./templates/index.js'))
  // fs.writeFileSync(path.resolve(ROOT, 'src/index.js'), index, 'utf-8')

  // Write script text to package.json.
  const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'))
  pkg.scripts = {
    start: 'cross-env NODE_ENV=development yarn webpack',
    debug: 'yarn nodemon tmp/<%=name%>.js --ignore *.*',
    build: 'cross-env NODE_ENV=production yarn webpack',
    test: 'yarn test'
  }
  fs.writeFileSync(path.resolve('./package.json'), JSON.stringify(pkg, null, '\t'), 'utf-8')

  // Install dependencies.
  console.log('Install Dependencies.')
  exec(`yarn add --dev \
webpack nodemon cache-loader babel-loader \
babel-core babel-preset-env babel-preset-react \
babel-plugin-transform-object-rest-spread \
uglifyjs-webpack-plugin webpack-node-externals`)

  // Recheck targets.

  // Clean all if failed.

  // Start app.
  exec(`yarn start`)
}

export default main
