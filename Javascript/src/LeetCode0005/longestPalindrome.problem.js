/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 005-最长回文字符串
 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

 示例 1：

 输入: "babad"
 输出: "bab"
 注意: "aba"也是一个有效答案。
 示例 2：

 输入: "cbbd"
 输出: "bb"
 * */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = module.exports = function(s) {
  return manacher(s);
};

// Manacher算法 best O(n)
function manacher(s) {
  let s_new = ['$','#'], s_len;
  let p = [];
  let mx = 0;
  let max_len = -1;
  let max_start = 1;
  let id = 0;
  for (let i = 0,len = s.length; i < len;i++ ) {
    s_new.push(s[i],'#');
  }
  s_new.push('\0');   // $ \0 边界条件
  s_len = s_new.length;
  for (let j = 1; j < s_len; j++) {
    if(j < mx) {
      p[j] = Math.min(p[2 * id - j], mx - j);
    } else {
      p[j] = 1;
    }
    while (s_new[j - p[j]] === s_new[j + p[j]]) {
      ++p[j];
    }
    if (mx < j + p[j]) {
      id = j;
      mx = j + p[j];
    }
    max_start = max_len >= p[j] - 1 ? max_start : j - p[j];
    max_len = Math.max(max_len,p[j] - 1);
  }
  let result = s_new.splice(max_start + 1, 2 * max_len + 1).filter(function (v) {
    return v !== '#';
  }).join('');
  return result;
}