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
    // let dp = [cost[0], cost[1]]
    let dp0 = cost[0], dp1 = cost[1]
    let res = 0
    const n = cost.length
    for (let i = 2; i < n; i++) {
        res = Math.min(dp0, dp1) + cost[i]
        dp0 = dp1
        dp1 = res
        // dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    return Math.min(dp1, dp0)
};
// @lc code=end

