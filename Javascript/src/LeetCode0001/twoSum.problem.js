/**
 * https://leetcode-cn.com/problems/two-sum/
 * 001-两数之和
 *
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumProblem = function (nums, target) {
  // 数组对象转换
  let obj = nums.reduce(function (object, item, idx) {
    if (object[item] === undefined) {
      object[item] = idx;
      return object;
    }
    // 重复数值入栈
    object[item] = [object[item],idx];
    return object;
  },{});
  let i;
  for ( i in obj ) {
    if (obj[i] instanceof Array && i * 2 === target) {
      return [obj[i][0],obj[i][1]].sort(function (a,b) {
        return a - b;
      });
    } else if (obj[target - i] !== undefined) {
      return [obj[i],obj[target - i ]].sort(function (a,b) {
        return a - b;
      });
    }
  }
};

const twoSum2 = function (nums, target) {
    // 数组对象转换
    let obj = nums.reduce(function (object, item, idx) {
      if (object[item] === undefined) {
        object[item] = idx;
        return object;
      }
      // 重复数值入栈
      object[item] = [object[item],idx];
      return object;
    },{});
    let i;
    for ( i in obj ) {
      if (obj[i] instanceof Array && i * 2 === target) {
        return [obj[i][0],obj[i][1]].sort(function (a,b) {
          return a - b;
        });
      } else if (obj[target - i] !== undefined) {
        return [obj[i],obj[target - i ]].sort(function (a,b) {
          return a - b;
        });
      }
    }
  };


module.exports = {
  twoSum: twoSumProblem,
  twoSum2
};