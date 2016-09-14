'use strict';
const expect = require('chai').expect;
const execSync = require('child_process').execSync;

describe('wix eslint', () => {

  describe('mocha', () => {
    it('should pass for valid mocha spec', () => {
      exec('mocha', 'mocha/valid.js');
    });

    it('should fail on exclusive tests (.only)', () => {
      expect(() => exec('mocha', 'mocha/with-only.js')).to.throw('Unexpected exclusive mocha test');
    });
  });

  describe('esnext', () => {
    it('should pass for valid es6', () => {
      exec('esnext', 'esnext/valid.js');
    });

    it('should fail on some violation (unused var)', () => {
      expect(() => exec('esnext', 'esnext/unused.js')).to.throw('\'someVar\' is defined but never used');
    });
  });

  describe('react-native', () => {
    it('should fail for usage of DeviceEventEmitter.removeAllListeners()', () => {
      expect(() => exec('react-native', 'react-native/device-event-emitter.js')).to.throw('Never use DeviceEventEmitter.removeAllListeners(). Remove specific listeners, instead');
    });

    it('should define globals defined : __DEV__, fetch', () => {
      exec('react-native', 'react-native/globals.js');
    });

    it('should pass for valid component structure', () => {
      exec('react-native', 'react-native/valid-component.js');
    });

    it('should pass for valid functions', () => {
      exec('react-native', 'react-native/valid-functions.js');
    });

    it('should fail for invalid functions', () => {
      expect(() => exec('react-native', 'react-native/invalid-functions.js')).to.throw('Expected parentheses around arrow function argument  babel/arrow-parens');
    });

    it('should allow no use before define', () => {
      exec('react-native', 'react-native/no-use-before-define.js');
    });
  });

  describe('react', () => {
    it('should pass for a react component with PascalCase', () => {
      exec('react', 'react/valid-pascal-case.js');
    });
  });

  function exec(lintcmd, targetFile) {
    try {
      execSync(`node ./node_modules/.bin/eslint -c ./${lintcmd}.js ./test/scripts/${targetFile}`);
    } catch (e) {
      throw new Error(`Message: ${e.toString()}, stdout: ${e.stdout && e.stdout.toString()}, stderr: ${e.stderr && e.stderr.toString()}`);
    }
  }
});
