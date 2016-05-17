'use strict';
var path = require('path');

module.exports = {
  extends: [
    'xo/esnext',
    'xo-react/space',
    path.join(__dirname, 'index.js')
  ],
  globals: {
    document: false
  }
};
