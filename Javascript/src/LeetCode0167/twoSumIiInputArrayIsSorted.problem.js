/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// Time: O(n), Space: O(1)
var twoSum = module.exports = function (numbers, target) {
  var i = 0, j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] > target) {
      --j;
    } else if (numbers[i] + numbers[j] < target) {
      ++i
    } else {
      return [i + 1, j + 1]
    }
  }
  return [-1, -1];
};