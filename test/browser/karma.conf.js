const webpackClientConfig = require('./webpack.config');
const saucelabsBrowsers = require('./saucelabs-browsers.json').browsers;

// NPM injects the name from `package.json` to this env var
const pkgName = process.env.npm_package_name;

module.exports = function(config) {
  // Default
  let browsers = ['PhantomJS'];
  // Saucelabs run
  if (process.env.SAUCELABS === 'true') {
    browsers = Object.keys(saucelabsBrowsers);
  }

  // karma configuration
  config.set({
    logLevel: config.LOG_INFO,
    basePath: '../',
    autoWatch: true,
    autoWatchBatchDelay: 1000,
    singleRun: true,
    restartOnFileChange: true,
    frameworks: ['mocha'],
    sauceLabs: {
      testName: `${pkgName}/client`
    },
    browserNoActivityTimeout: 120 * 1000,
    concurrency: 2,
    customLaunchers: saucelabsBrowsers,
    files: [
      'browser/entry.js'
    ],
    browsers: browsers,
    reporters: process.env.SAUCELABS ? ['mocha', 'saucelabs'] : ['mocha'],

    mochaReporter: {
      output: 'autowatch',
      showDiff: true
    },

    preprocessors: {
      'browser/entry.js': ['webpack'],
    },

    // webpack test configuration
    webpack: webpackClientConfig,

    // webpack-dev-middleware configuration
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
