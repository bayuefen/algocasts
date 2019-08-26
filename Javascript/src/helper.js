const ListNode = require('../src/ListNode');
const TreeNode = require('../src/TreeNode');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(len) {
  let str = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < len; i++) {
    str += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return str;
}

function getRandomArray(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(getRandomInt(0, 100));
  }
  return arr;
}

function buildLinkedList(...array) {
  if (!array || !array.length) {
    return null;
  }

  let dummy = new ListNode(0);
  let p = dummy;
  for (let i = 0; i < array.length; ++i) {
    p.next = new ListNode(array[i]);
    p = p.next;
  }
  return dummy.next;
}

function buildLinkedListWithCycle(array, startNodeIndex) {
  if (!array || !array.length) {
    return null;
  }

  let dummy = new ListNode(0);
  let p = dummy, start = null;
  for (let i = 0; i < array.length; ++i, --startNodeIndex) {
    p.next = new ListNode(array[i]);
    p = p.next;
    if (startNodeIndex === 0) {
      start = p;
    }
  }
  p.next = start;
  return dummy.next; 
}

function linkedList2Array(head) {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return array;
}

class Item {

  constructor(parent, childVal, isLeft) {
    this.parent = parent;
    this.childVal = childVal;
    this.isLeft = isLeft;
  }
}

/*
   * 根据树的层序遍历数组，构建一棵二叉树。例如：
   * 输入：[3,2,3,null,3,null,1]
   *
   * 构建的二叉树是：
   *     3
   *    / \
   *   2   3
   *    \   \
   *     3   1
   *
   * 注意：如果某个位置上的节点为 null，那么它左右子树的 null 不需要写出来。
   * 比如对于下面这棵树：
   *     1
   *      \
   *       2
   *        \
   *         4
   * 应该表示为：[1,null,2,null,4]
   * 而不是：[1,null,2,null,null,null,4]
   *
   */
function buildTree(...nums) {
  if (!nums || nums.length === 0) {
    return null;
  }
  const dummy = new TreeNode(0);
  const q = [];
  q.push(new Item(dummy, nums[0], true));
  let p = 1;

  while (q.length) {
    const item = q.shift();
    const child = item.childVal ? new TreeNode(item.childVal) : null;
    if (item.isLeft) {
      item.parent.left = child;
    } else {
      item.parent.right = child;
    }
    if (child !== null && p < nums.length) {
      q.push(new Item(child, nums[p++], true));
      q.push(new Item(child, nums[p++], false));
    }
  }

  return dummy.left;
}

function tree2Array(root) {
  if (!root) {
    return [];
  }
  const queue = [];
  const result = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    result.push(node ? node.val : null);
    if (node && (node.left || node.right)) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return result;
}

module.exports = {
  getRandomInt,
  getRandomString,
  getRandomArray,
  buildLinkedList,
  buildLinkedListWithCycle,
  linkedList2Array,
  buildTree,
  tree2Array
};
