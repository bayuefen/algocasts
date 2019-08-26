const { expect } = require('chai');
const longestPalindrome = require('./longestPalindrome.problem');
const cases = require('./longestPalindrome.case');

describe('LeetCode0005 #longestPalindrome', function () {
  describe('Manacher Version', function () {
    it('should return success', function () {
      expect(longestPalindrome(...cases[0].input)).to.equal(cases[0].output);
      expect(longestPalindrome(...cases[1].input)).to.equal(cases[1].output);
      expect(longestPalindrome(...cases[2].input)).to.equal(cases[2].output);
    });
  });
});