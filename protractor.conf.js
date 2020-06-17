const SpecReporter = require("jasmine-spec-reporter").SpecReporter,
  path = require('path'),
  moment = require('moment');

moment.locale('pt-br');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // directConnect: true,

  baseUrl: 'https://angularjs.org',

  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // getPagetimeout: prop.get('pageTimeOut'),

  // allScriptsTimeout: prop.get('scriptTimeout'),

  // require feature files
  specs: [
    'test/features/**/*.feature'
  ],

  capabilities: {
    shardTestFiles: false,
    browserName: 'chrome',
    "seleniumProtocol": "WebDriver",

    metadata: {
      device: 'Local test machine',
      platform: {
        name: 'Windows',
        version: '10'
      }
    },
  },

  ignoreUncaughtExceptions: true,

  cucumberOpts: {
    // require step definitions
    require: [
      'test/steps/**/*.js',
      'test/timeout.js'
    ],
    format: 'json:.tmp/results.json',
    strict: true,
    'no-colors': true,
    'dry-run': false,
  },

  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options: {
      // read the options part
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      displayDuration: true,
      disableLog: true,
      saveCollectedJSON: true,
      pageTitle: 'Test Report',
      reportName: '<b>Test Report</b>',
      pageFooter: '<div align="center"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.zup.com.br">www.zup.com.br</a></p></div>',
      customData: {
        title: 'Run info',
        data: [
          { label: 'Project', value: 'Itau - Cambio PJ' },
          { label: 'Execution Date', value: moment().format('LLL') },
        ]
      },
    }
  }],

  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files

  },

  afterEach: () => {
    browser.manage().deleteAllCookies();
    return browser.executeScript("sessionStorage.clear(); localStorage.clear();");
  },

  // highlightDelay: 1000
};