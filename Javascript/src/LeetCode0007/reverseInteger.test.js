const { expect } = require('chai');
const reverse = require('./reverseInteger.problem');
const cases = require('./reverseInteger.case');

describe('LeetCode0007 #reverseInteger', function () {
  describe('Version1', function () {
    it('should return success', function () {
      expect(reverse(...cases[0].input)).to.equal(cases[0].output);
      expect(reverse(...cases[1].input)).to.equal(cases[1].output);
      expect(reverse(...cases[2].input)).to.equal(cases[2].output);
      expect(reverse(...cases[3].input)).to.equal(cases[3].output);
      expect(reverse(...cases[4].input)).to.equal(cases[4].output);
      expect(reverse(...cases[5].input)).to.equal(cases[5].output);
    });
  });
});