/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 009-回文数
 *
 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

 示例 1:

 输入: 121
 输出: true
 示例 2:

 输入: -121
 输出: false
 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 示例 3:

 输入: 10
 输出: false
 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = module.exports = function(x) {
  if(x<0) {
    return false;
  }
  var s = x.toString(),i = 0,j = s.length - 1;
  for (;i<=j;i++,j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};