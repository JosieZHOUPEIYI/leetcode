/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0], pre = 0
    for (let i = 0; i < nums.length; i++) {
        if (pre > 0) pre += nums[i]
        else pre = nums[i]
        max = Math.max(max, pre)
    }
    return max

};
// @lc code=end

