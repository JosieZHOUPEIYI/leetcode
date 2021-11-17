/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    //贪心算法
    g = g.sort((i, j) => i - j)
    s = s.sort((i, j) => i - j)

    let i = 0, j = 0
    // for (let k = 0; i < g.length && j < s.length; k++) {
    //     if (g[i] <= s[j++]) i++
    // }
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j++]) i++
        // if (g[i] <= s[j]) {
        //     i++
        // }
        // j++

    }
    return i
};
// @lc code=end

