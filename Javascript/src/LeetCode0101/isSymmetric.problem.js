
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Plan1: 递归版本
// Time: O(n), Space: O(n)
function isSymmetricTreeRecursive(root) {
  if (root === null ) return true;
  return isSymmetricFn(root.left, root.right);
}

function isSymmetricFn(rnL,rnR) {
  if (rnL !== null && rnR !== null) {
    return rnL.val === rnR.val &&
      isSymmetricFn(rnL.left, rnR.right) && isSymmetricFn(rnR.left, rnL.right);
  } else {
    return rnL === null && rnR === null;
  }
}

// Plan2：迭代版本
// Time: O(n), Space: O(n)
function isSymmetricTreeIterative(root) {
  if (root === null ) return true;
  var stack = [];
  stack.push(root.left);
  stack.push(root.right);

  while (stack.length > 0) {
    var l = stack.pop();
    var r = stack.pop();
    if (l === null && r === null ) continue;
    if (l === null || r === null ) return false;
    if (l.val !== r.val) return false;

    // [Error] concat会创建副本，改变指针指向
    // stack.concat([l.left, r.right, l.right, r.left])
    stack.push(l.left);
    stack.push(r.right);
    stack.push(l.right);
    stack.push(r.left);
  }
  return true;
}

module.exports = {
  isSymmetricTreeRecursive,
  isSymmetricTreeIterative
};