'use strict';
var path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'index.js')
  ],
  rules: {
    'never-device-emitter-remove-all': 2
  },
  globals: {
    document: false
  }
};
