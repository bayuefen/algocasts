const { expect } = require('chai');
const { rulerTake,  bruteForce } = require('./lengthOfLongestSubstring.problem');
const cases = require('./lengthOfLongestSubstring.case');

describe('LeetCode0003 #lengthOfLongestSubstring', function () {
  describe('rulerTake Version', function () {
    it('should return success', function () {
      expect(rulerTake(...cases[0].input)).to.equal(cases[0].output);
      expect(rulerTake(...cases[1].input)).to.equal(cases[1].output);
      expect(rulerTake(...cases[2].input)).to.equal(cases[2].output);
      expect(rulerTake(...cases[3].input)).to.equal(cases[3].output);
    });
  });

  describe('bruteForce Version', function () {
    it('should return success', function () {
      expect(bruteForce(...cases[0].input)).to.equal(cases[0].output);
      expect(bruteForce(...cases[1].input)).to.equal(cases[1].output);
      expect(bruteForce(...cases[2].input)).to.equal(cases[2].output);
      expect(bruteForce(...cases[3].input)).to.equal(cases[3].output);
    });
  });
});