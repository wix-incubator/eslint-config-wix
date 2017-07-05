'use strict';
var path = require('path');

module.exports = {
  extends: path.join(__dirname, 'esnext.js'),
  env: {
    jasmine: true
  },
  plugins: ['jasmine'],
  rules: {
    'jasmine/no-focused-tests': 2,
    'no-unused-expressions': 0
  }
};
