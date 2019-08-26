/**
 * @param {string} s
 * @return {number}
 */
// 尺取法 best
function rulerTake(s) {
  let map = {};
  let left = 0;
  return s.split('').reduce(function(max, current, idx) {
    left = map[current] >= left ? map[current] + 1 : left;
    map[current] = idx;
    return Math.max(max, idx - left + 1);
  },0);
}

// 动态规划法 转成二维矩阵取最大值
function bruteForce(s) {
  if (s.length === 0 ) return 0;
  let result = 1;
  let j,k;
  for (j = 0; j < s.length; j++) {
    let map = {};
    map[s[j]] = j;
    for (k = j + 1; k < s.length;k++) {
      if (map[s[k]] !== undefined) {
        break;
      }
      map[s[k]] = k;
      result = Math.max(result,k - j + 1);
    }
  }
  return result;
}

module.exports = {
  rulerTake,
  bruteForce
};