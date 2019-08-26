const { expect } = require('chai');
const { mergeSort } = require('./findMedianSortedArrays.problem');
const cases = require('./findMedianSortedArrays.case');

describe('LeetCode0004 #findMedianSortedArrays', function () {
  describe('mergeSort Version', function () {
    it('should return success', function () {
      expect(mergeSort(...cases[0].input)).to.equal(cases[0].output);
      expect(mergeSort(...cases[1].input)).to.equal(cases[1].output);
    });
  });
});