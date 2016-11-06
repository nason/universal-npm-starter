require('babel-register');
require('babel-polyfill');

// mmmmm dogfood
// also sanity
const starterModule = require('..');
/* eslint-disable no-console */
console.log('Testing module:\n', starterModule);
/* eslint-enable */

const chai = require('chai');
const sinon = require('sinon');

/*
  Test Globals
 */
global.expect = chai.expect;
global.should = chai.should;
global.assert = chai.assert;
global.sinon = sinon;

/*
  Global mocha hooks
 */

// Sandbox sinon for each test
beforeEach(() => {
  global.sinon = sinon.sandbox.create();
});
afterEach(() => {
  global.sinon.restore();
});
