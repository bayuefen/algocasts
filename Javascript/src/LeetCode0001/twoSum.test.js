const { expect } = require('chai');
const { twoSum, twoSum2 } = require('./twoSum.problem');
const cases = require('./twoSum.case');

describe('LeetCode0001 #twoSum', function () {
  describe('Version1', function () {
    it('should return success', function () {
      expect(twoSum(...cases[0].input)).to.deep.equal(cases[0].output);
      expect(twoSum(...cases[1].input)).to.deep.equal(cases[1].output);
      expect(twoSum(...cases[2].input)).to.deep.equal(cases[2].output);
    });
  });

  describe('Version1', function () {
    it('should return success', function () {
      expect(twoSum2(...cases[0].input)).to.deep.equal(cases[0].output);
      expect(twoSum2(...cases[1].input)).to.deep.equal(cases[1].output);
      expect(twoSum2(...cases[2].input)).to.deep.equal(cases[2].output);
    });
  });
});