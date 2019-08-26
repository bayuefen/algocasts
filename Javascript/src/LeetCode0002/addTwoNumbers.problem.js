/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 002-两数相加
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 示例：

 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require('../ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = module.exports = function(l1, l2) {
  let t1 = l1, t2 = l2, t3, l3, carry = 0;
  while (t1 || t2 || carry) {
    let v1 = 0, v2 = 0;
    if (t1) {
      v1 = t1.val;
      t1 = t1.next;
    }
    if (t2) {
      v2 = t2.val;
      t2 = t2.next;
    }
    let sum = v1 + v2 + carry;
    // 进位
    carry = Math.floor(sum / 10);
    if (!t3) {
      l3 = new ListNode(sum % 10);
      t3 = l3;
    } else {
      t3.next = new ListNode(sum % 10);
      t3 = t3.next;
    }
  }
  return l3;
};