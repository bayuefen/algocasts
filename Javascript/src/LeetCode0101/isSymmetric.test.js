const expect = require('chai').expect;
const { isSymmetricTreeRecursive, isSymmetricTreeIterative } = require('./isSymmetric.problem');
const cases = require('./isSymmetric.case');
const helper = require('../helper');

describe('LeetCode0101 #isSymmetric', function() {
  describe('isSymmetricTreeRecursive Version', function () {
    it('should return success boolean', function () {
      expect(isSymmetricTreeRecursive(...cases[0].input)).equal(cases[0].output);
      expect(isSymmetricTreeRecursive(...cases[1].input)).equal(cases[1].output);
    });
  });

  describe('isSymmetricTreeIterative Version', function () {
    it('should return success boolean', function () {
      expect(isSymmetricTreeIterative(...cases[0].input)).equal(cases[0].output);
      expect(isSymmetricTreeIterative(...cases[1].input)).equal(cases[1].output);
    });
  });
});