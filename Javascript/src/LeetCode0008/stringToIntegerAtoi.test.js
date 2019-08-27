const { expect } = require('chai');
const { parseATOI, simpleATOI } = require('./stringToIntegerAtoi.problem');
const cases = require('./stringToIntegerAtoi.case');

describe('LeetCode0008 #stringToIntegerAtoi', function () {
  describe('parseATOI Version', function () {
    it('should return success', function () {
      expect(parseATOI(...cases[0].input)).to.equal(cases[0].output);
      expect(parseATOI(...cases[1].input)).to.equal(cases[1].output);
      expect(parseATOI(...cases[2].input)).to.equal(cases[2].output);
      expect(parseATOI(...cases[3].input)).to.equal(cases[3].output);
      expect(parseATOI(...cases[4].input)).to.equal(cases[4].output);
    });
  });
  describe('simpleATOI Version', function () {
    it('should return success', function () {
      expect(simpleATOI(...cases[0].input)).to.equal(cases[0].output);
      expect(simpleATOI(...cases[1].input)).to.equal(cases[1].output);
      expect(simpleATOI(...cases[2].input)).to.equal(cases[2].output);
      expect(simpleATOI(...cases[3].input)).to.equal(cases[3].output);
      expect(simpleATOI(...cases[4].input)).to.equal(cases[4].output);
    });
  });
});