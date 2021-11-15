/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //最低买入，最高卖出
    let max = 0
    let minprices = prices[0]
    for (let i = 1; i < prices.length; i++) {
        minprices = Math.min(prices[i], minprices) //取最小
        //最高减-最小
        //假设我们已经知道了 i-1 个股票的最大利润为 dp[i-1]，显然 i 个连续股票的最大利润为 dp[i-1] ，要么就是就是 prices[i] - minprice （ minprice 为前 i-1 支股票的最小值 ），在这两个数中我们取最大值
        // dp[i] = Math.max(dp[i - 1], prices[i] - minprices)
        //优化空间复杂度
        max = Math.max(max, prices[i] - minprices)
    }
    return max

};
// @lc code=end

