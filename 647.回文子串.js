/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    /**动态规划
     * 假如abba
          1.确定dp数组和下标含义，dp[i][j] ,字符串i到j是回文字符串
          2.递推公式 
              情况1：i==j，即是本身，是回文字符true
              情况2:i和j相差1，bb，是回文字符true
              情况3:i和j相差大于2，例如cabac，此时s[i]与s[j]已经相同了，我们看i到j区间是不是回文子串就看aba是不是回文就可以了，那么aba的区间就是 i+1 与 j-1区间，这个区间是不是回文就看dp[i + 1][j - 1]是否为true。
       */
    const len = s.length
    // let dp = new Array(len)
    // dp.map(i => dp[i] = false)
    // let dp = Array.from(Array(len), () => Array(len).fill(false));
    let dp = []
    let max = 0
    // i为行，j为列， 重下往上算，确保dp[i + 1][j - 1]在dp[i][j]前计算好
    //
    for (let i = len - 1; i >= 0; i--) {
        dp[i] = []
        for (let j = i; j < len; j++) {
            dp[i][j] = false
            if (s[i] === s[j]) {
                if (j - i < 2) { dp[i][j] = true }
                else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
                max += dp[i][j] ? 1 : 0
            }

        }
    }
    return max

    // for (let j = 0; j < len; j++) {
    //     for (let i = 0; i <= j; i++) {
    //         if (s[i] === s[j]) {
    //             if ((j - i) < 2) {
    //                 dp[i][j] = true;
    //             } else {
    //                 dp[i][j] = dp[i + 1][j - 1];
    //             }
    //             max += dp[i][j] ? 1 : 0;
    //         }
    //         console.log(dp);
    //     }
    // }
    // return max
};

console.log(countSubstrings('abc'));
// @lc code=end

