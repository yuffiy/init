// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type Model = {
  writed: boolean
}


/// ACTION

export const WRITE_SCRIPT: string = Symbol()
export type WriteScriptAction = {
  type: WRITE_SCRIPT
}

export type Action =
  | WriteScriptAction

export default {
  WRITE_SCRIPT
}
