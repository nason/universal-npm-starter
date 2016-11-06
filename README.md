universal-npm-starter
================

[![Build Status][travis-image]][travis-url]
[![Libraries.io for GitHub][librariesio-image]][librariesio-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

[![Sauce Test Status][saucelabs-image]][saucelabs-url]

>Boilerplate for a NPM package for the node and browser

# Introduction

## Replace this with your package's details!

### Starter Intro

This is a boilerplate npm module that can be used to create a universal JavaScript module for node and browser runtimes. It uses [rollup](http://rollupjs.org/) to bundle ES2015 code.

The implementation in this boilerplate generates a module thats is distributed perfectly symmetrically, meaning the exact same code is bundled for and executed in node and the browser.

This toolchain can also generate an asymmetrical package with runtime-specific bundles. This involves a few steps:
- modifying the the rollup config
- updating `package.json` with a `browser` property
- creating `browser` and `node` entry files
- maintaining API contracts between all entry files

See `we-js-logger` for an example of an asymmetrical package.

# Usage

Clone this repo and replace the code in the `src/` and `test/` directories with your module. Make it your own. PRs are always welcome :)

# Testing

Tests are run via `mocha` in node, and via `karma`, `webpack` and `mocha` for browsers (PhantomJS by default, but Karma is quite configurable).

This package is also preconfigured for Travis and Sauce Labs. To enable this:

1. Setup travis-ci for your repository
2. Add `SAUCE_USER_NAME` and `SAUCE_ACCESS_TOKEN` keys to the travis job

# Examples

This boilerplate was developed while creating a few modules at [WeWork](https://www.wework.com):

- https://github.com/wework/env-universal
- https://github.com/wework/we-js-logger
- https://github.com/wework/express-universal-query-validator

# Development

1. Checkout this repo
2. Run `npm install`
3. Make changes in a feature branch and open a PR to `master`

In lieu of a formal style guide, please:

 - follow the conventions present in the codebase
 - respect the linter
 - keep tests green
 - maintain test coverage

[Installing an EditorConfig plugin is also nice](http://editorconfig.org/#download).

# npm scripts

Target | Behavior
------------ | -------------
**`npm test`** | Runs tests in browser and node runtimes
**`npm run tdd`** | Runs tests, bundles and re-runs on file changes
**`npm run test:coverage`** | Runs tests and outputs a code coverage report to `/coverage`
**`npm run test:ci`** | Runs tests, outputs code coverage
**`npm run lint`** | (*Run as a git pre-commit hook*) Runs `eslint`
**`npm run docs`** | Generates `API.md` from JSDoc comments in `/src`
**`npm run security-scan`** | (*Run as a git pre-push hook*) Checks npm dependencies for security vulnerabilities
**`npm run release <version>`** | Generates a changelog, updates package version, tags and pushes via [`np`](https://www.npmjs.com/package/np). This should only be run on an up-to-date `master` by a maintainer of this package. <br /><br />Version can be a semver level: `patch | minor | major | prepatch | preminor | premajor | prerelease`, or a valid semver version: `1.2.3`.

**`npm run` will list all npm scripts**


[npm-url]: https://npmjs.org/package/universal-npm-starter
[npm-version-image]: http://img.shields.io/npm/v/universal-npm-starter.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/universal-npm-starter.svg?style=flat-square

[coveralls-image]:https://coveralls.io/repos/github/nason/universal-npm-starter/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/nason/universal-npm-starter?branch=master

[travis-url]:https://travis-ci.org/nason/universal-npm-starter
[travis-image]: https://travis-ci.org/nason/universal-npm-starter.svg?branch=master

[saucelabs-image]:https://saucelabs.com/browser-matrix/universal-npm-starter.svg
[saucelabs-url]:https://saucelabs.com/u/universal-npm-starter

[license-url]: LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[librariesio-url]: https://libraries.io/npm/universal-npm-starter
[librariesio-image]: https://img.shields.io/librariesio/github/nason/universal-npm-starter.svg?maxAge=2592000
