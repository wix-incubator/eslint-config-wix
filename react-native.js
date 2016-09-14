'use strict';
var path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'react.js')
  ],
  plugins: [
    'react-native-wix'
  ],
  rules: {
    'react-native-wix/never-device-emitter-remove-all': 2
  },
  globals: {
    document: false,
    fetch: true,
    __DEV__: true
  }
};
