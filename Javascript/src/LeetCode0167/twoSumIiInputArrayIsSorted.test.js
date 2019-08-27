const { expect } = require('chai');
const twoSum  = require('./twoSumIiInputArrayIsSorted.problem');
const cases = require('./twoSumIiInputArrayIsSorted.case');

describe('LeetCode0167 #twoSumIiInputArrayIsSorted', function () {
  describe('twoSum Version', function () {
    it('should return success', function () {
      expect(twoSum(...cases[0].input)).to.deep.equal(cases[0].output);
    });
  });
});