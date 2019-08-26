/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 004-两个排序数组的中位数
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
 *
 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
 *
 * 你可以假设 nums1 和 nums2 不同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 中位数是 2.0
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 中位数是 (2 + 3)/2 = 2.5
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 分治排序
function mergeSort(nums1,nums2) {
  let i = 0;
  let j = 0;
  let result = [];
  let nums1Length = nums1.length;
  let nums2Length = nums2.length;
  if (nums1Length === 0) {
    return nums2;
  }
  if (nums2Length === 0) {
    return nums1;
  }
  while (i !== nums1Length && j !== nums2Length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i = i + 1;
    } else {
      result.push(nums2[j]);
      j = j + 1;
    }
  }
  if (i === nums1Length) {
    result = result.concat(nums2.slice(j));
  } else if (j === nums2Length) {
    result = result.concat(nums1.slice(i));
  }
  let t = result;
  let l = t.length;
  return l % 2 === 0 ? (t[l/2] + t[l/2 - 1]) / 2 : t[parseInt(l/2)];
}

module.exports = {
  mergeSort
};