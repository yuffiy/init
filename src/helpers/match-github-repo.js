// -*- mode: js-jsx -*-
// -*- coding: utf-8 -*-
// @flow


export type User = string
export type Repo = string
export type GithubRepo = [User, Repo]

function matchGithubRepo(str: string): ?GithubRepo {
  const matchHttpProtocol: ?Array<string> = str.match(/^https:\/\/github.com\/([^/]+)\/([^.]+)\.git$/) 
  const matchGitProtocol:  ?Array<string> = str.match(/^git@github\.com:([^/]+)\/([^.]+)\.git$/)
  const matchShortName:    ?Array<string> = str.match(/^([^/]+)\/([^]+)$/)

  return matchHttpProtocol || matchGitProtocol || matchShortName || null 
}

export default matchGithubRepo
