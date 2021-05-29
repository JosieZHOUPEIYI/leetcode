/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 时间复杂度O(n) 空间O(1)
    let res = 0
    while (x>=1||x<=-1) {
        let tmp = parseInt(x%10)
        res = res * 10 + tmp
        x = parseInt(x/10)
        if((res > 0 && res>(2**31))|| (res<0 && res< (-2)**31)){
            return 0
        }
    }
    return res
    
};
console.log(reverse(1000000001));
// @lc code=end

