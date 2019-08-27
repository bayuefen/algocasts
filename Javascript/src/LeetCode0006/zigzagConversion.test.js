const { expect } = require('chai');
const convert = require('./zigzagConversion.problem');
const cases = require('./zigzagConversion.case');

describe('LeetCode0006 #zigzagConversion', function () {
  describe('Version1', function () {
    it('should return success', function () {
      expect(convert(...cases[0].input)).to.equal(cases[0].output);
      expect(convert(...cases[1].input)).to.equal(cases[1].output);
      expect(convert(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});