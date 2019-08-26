const expect = require('chai').expect;
const addTwoNumbers = require('./addTwoNumbers.problem');
const cases = require('./addTwoNumbers.case');
const helper = require('../helper');
const {
  linkedList2Array
} = helper;

describe('LeetCode0002 #addTwoLinkedListNumbers', function() {
  it('should add two linked list numbers', function() {
    expect(linkedList2Array(addTwoNumbers(...cases[0].input))).deep.equal(cases[0].output);
    expect(linkedList2Array(addTwoNumbers(...cases[1].input))).deep.equal(cases[1].output);
    expect(linkedList2Array(addTwoNumbers(...cases[2].input))).deep.equal(cases[2].output);
    expect(linkedList2Array(addTwoNumbers(...cases[3].input))).deep.equal(cases[3].output);
  });
});