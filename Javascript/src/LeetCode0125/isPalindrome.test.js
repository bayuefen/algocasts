const { expect } = require('chai');
const isPalindrome  = require('./isPalindrome.problem');
const cases = require('./isPalindrome.case');

describe('LeetCode0125 #isPalindrome', function () {
  describe('isPalindrome Version', function () {
    it('should return success', function () {
      expect(isPalindrome(...cases[0].input)).to.equal(cases[0].output);
      expect(isPalindrome(...cases[1].input)).to.equal(cases[1].output);
    });
  });
});