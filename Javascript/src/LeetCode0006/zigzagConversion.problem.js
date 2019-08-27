/**
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * 006-Z字形变换
 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：

 P   A   H   N
 A P L S I I G
 Y   I   R
 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"

 实现一个将字符串进行指定行数变换的函数:

 string convert(string s, int numRows);
 示例 1:

 输入: s = "PAYPALISHIRING", numRows = 3
 输出: "PAHNAPLSIIGYIR"
 示例 2:

 输入: s = "PAYPALISHIRING", numRows = 4
 输出: "PINALSIGYAHRPI"
 解释:

 P     I    N
 A   L S  I G
 Y A   H R
 P     I
 * */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * i = 0 PIN
 * i = 1 AL SI G
 * i = 2 YA HR
 * i = 3 P I
 * */
var convert = module.exports = function(s, numRows) {
  if(numRows === 1) return s;
  var result = '';
  var len = s.length;
  var period = numRows * 2 - 2;
  for (var i = 0; i < numRows; i++ ) {
    for(var j = 0; j + i < len; j+=period) {
      result += s[j+i];
      // 除第一行和最后一行Z型转换转交，其他均有两个值
      if(i !== 0 && i !== numRows - 1 && j + period - i < len) {
        result += s[j + period - i];
      }
    }
  }
  return result;
};