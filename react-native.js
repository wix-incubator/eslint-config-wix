'use strict';
var path = require('path');

module.exports = {
  extends: [
    'xo/esnext',
    'xo-react/space',
    path.join(__dirname, 'index.js')
  ],
  plugins: [
    'react-native-wix'
  ],
  rules: {
    'react/prop-types': 0, //no prop validations
    'react/jsx-handler-names': 0, // any prop name is OK
    'arrow-parens': 0, //doesn't work with babel
    'babel/arrow-parens': [ // ensure arrow parens
      'error',
      'always'
    ],
    'no-unused-vars': [ // unused args in functions are OK
      'error',
      {
        args: 'none'
      }
    ],
    'generator-star-spacing': 0, // doesn't work with babel
    'babel/generator-star-spacing': [ // spacing in async functions
      'error',
      'after'
    ],
    'react/jsx-no-bind': [ // bind not allowed in render
      'error',
      {
        allowArrowFunctions: true
      }
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      'tag-aligned'
    ],
    'no-use-before-define': 0, // breaks in react-native because of styles
    'react-native-wix/never-device-emitter-remove-all': 2
  },
  globals: {
    document: false,
    fetch: true,
    __DEV__: true
  }
};
