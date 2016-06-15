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

  function exec(lintcmd, targetFile) {
    try {
      execSync(`node ./node_modules/.bin/eslint -c ./${lintcmd}.js ./test/scripts/${targetFile}`);
    } catch (e) {
      throw new Error(`Message: ${e.toString()}, stdout: ${e.stdout && e.stdout.toString()}, stderr: ${e.stderr && e.stderr.toString()}`);
    }
  }
});
