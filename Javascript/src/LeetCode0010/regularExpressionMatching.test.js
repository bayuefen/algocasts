const { expect } = require('chai');
const { recursion } = require('./regularExpressionMatching.problem');
const cases = require('./regularExpressionMatching.case');

describe('LeetCode0010 #regularExpressionMatching', function () {
  describe('recursion Version', function () {
    it('should return success', function () {
      expect(recursion(...cases[0].input)).to.equal(cases[0].output);
      expect(recursion(...cases[1].input)).to.equal(cases[1].output);
      expect(recursion(...cases[2].input)).to.equal(cases[2].output);
      expect(recursion(...cases[3].input)).to.equal(cases[3].output);
      expect(recursion(...cases[4].input)).to.equal(cases[4].output);
      expect(recursion(...cases[5].input)).to.equal(cases[5].output);
      expect(recursion(...cases[6].input)).to.equal(cases[6].output);
    });
  });
});