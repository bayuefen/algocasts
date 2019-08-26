const helper = require('../helper');
const {
  buildLinkedList,
} = helper;

module.exports = [
  {
    input: [buildLinkedList(1, 2, 3), buildLinkedList(6, 7, 8, 9)],
    output: [7, 9, 1, 0, 1]
  },
  {
    input: [buildLinkedList(9, 9, 9), buildLinkedList(1)],
    output: [0, 0, 0, 1]
  },
  {
    input: [buildLinkedList(9, 9, 9), buildLinkedList(null)],
    output: [9, 9, 9]
  },
  {
    input: [buildLinkedList(null), buildLinkedList(null)],
    output: [0]
  }
];