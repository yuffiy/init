// -*- mode: js -*-
// -*- coding: utf-8 -*-
// @flow


/// MODEL

export type FLAG =
  | 1  // Ready
  | 2  // Begin
  | 3  // End

export type Model = {
  configure: FLAG,
  checking:  FLAG,
  init:      FLAG,
  generate:  FLAG,
  install:   FLAG,
  start:     FLAG
}


/// ACTION

export const CONFIGURE_BEGIN: string = Symbol()
export type ConfigureBeginAction = {
  type: CONFIGURE_BEGIN
}

export const CONFIGURE_END: string = Symbol()
export type ConfigureEndAction = {
  type: CONFIGURE_END
}

export const CHECKING_BEGIN: string = Symbol()
export type CheckingBeginAction = {
  type: CHECKING_BEGIN
}

export const CHECKING_END: string = Symbol()
export type CheckingEndAction = {
  type: CHECKING_END
}

export const INIT_BEGIN: string = Symbol()
export type InitBeginAction = {
  type: INIT_BEGIN
}

export const INIT_END: string = Symbol()
export type InitEndAction = {
  type: INIT_END
}

export const GENERATE_BEGIN: string = Symbol()
export type GenerateBeginAction = {
  type: GENERATE_BEGIN
}

export const GENERATE_END: string = Symbol()
export type GenerateEndAction = {
  type: GENERATE_END
}

export const INSTALL_BEGIN: string = Symbol()
export type InstallBeginAction = {
  type: INSTALL_BEGIN
}

export const INSTALL_END: string = Symbol()
export type InstallEndAction = {
  type: INSTALL_END
}

export const START_BEGIN: string = Symbol()
export type StartBeginAction = {
  type: START_BEGIN
}

export const START_END: string = Symbol()
export type StartEndAction = {
  type: START_END
}


export type Action =
  | ConfigureBeginAction
  | ConfigureEndAction
  | CheckingBeginAction
  | CheckingEndAction
  | InitBeginAction
  | InitEndAction
  | GenerateBeginAction
  | GenerateEndAction
  | InstallBeginAction
  | InstallEndAction
  | StartBeginAction
  | StartEndAction

export default {
  CONFIGURE_BEGIN,
  CONFIGURE_END,
  CHECKING_BEGIN,
  CHECKING_END,
  INIT_BEGIN,
  INIT_END,
  GENERATE_BEGIN,
  GENERATE_END,
  INSTALL_BEGIN,
  INSTALL_END,
  START_BEGIN,
  START_END
}
