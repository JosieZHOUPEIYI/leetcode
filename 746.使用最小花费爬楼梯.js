/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [cost[0], cost[1]]
    const len = cost.length
    for (let i = 0; i < len; i++) {
        dp[i] = Math.min(dp(i - 1), dp(i - 2)) + cost[i]
    }
    return dp[i]
};
// @lc code=end

