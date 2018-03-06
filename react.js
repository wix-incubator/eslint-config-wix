'use strict';
var path = require('path');

module.exports = {
  extends: [
    'xo/esnext',
    'xo-react/space',
    path.join(__dirname, 'index.js')
  ],
  env: {
    browser: true,
    node: true
  },
  plugins: ['lodash'],
  rules: {
    'lodash/import-scope': 'warn',
    'react/jsx-no-bind': [2, {allowArrowFunctions: true}],
    'react/jsx-pascal-case': 0,
    'react/no-unused-prop-types': 0,
    'react/no-children-prop': 0,
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'tag-aligned',
      selfClosing: false
    }],
    'react/forbid-component-props': 0
  }
};
