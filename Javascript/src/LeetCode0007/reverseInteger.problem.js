/**
 * https://leetcode-cn.com/problems/reverse-integer/
 * 007-反转整数
 *
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 * 注意:
 *
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = module.exports = function(x) {
  var symbol = x < 0 ? '-' : '';
  var t = Number(symbol + Math.abs(x).toString().split('').reverse().join(''));
  return t >= (-Math.pow(2,31)) && t <= ( Math.pow(2,31) - 1) ? t : 0;
};
