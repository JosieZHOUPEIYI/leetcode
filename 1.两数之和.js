/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    let index = nums.indexOf(k)
    if (index >= 0 && index != i) {
      return [i, index]
    }
  }
  return []
};

console.log(twoSum([2,7,11,15],9));
// @lc code=end

