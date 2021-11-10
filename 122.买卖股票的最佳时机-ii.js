/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 贪心算法 第i天买入，第i+1天卖出，如果有利润就买入
    /** 当天卖出以后，当天还可以买入，所以其实可以第三天卖出，第三天买入，第四天又卖出（（5-1）+ （6-5） === 6 - 1）。所以算法可以直接简化为只要今天比昨天大，就卖出。 */
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            console.log(prices[i + 1], prices[i]);
            profit += prices[i + 1] - prices[i]
        }
    }
    return profit
    // 时间复杂度O(n) 空间O(1)
};
// @lc code=end

