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
  },
  rules: {
    'react/jsx-no-bind': [2, {allowArrowFunctions: true}],
    'react/jsx-pascal-case': 0,
    'react/no-unused-prop-types': 0,
    'react/no-children-prop': 0,
    'react/forbid-component-props': 0
  }
};
