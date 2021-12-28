/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

//解题：https://mp.weixin.qq.com/s/6IMMidwOhTNWJSSLmCWR7g
var minEatingSpeed = function (piles, h) {
    let right = Math.max(...piles)
    let left = 1
    //二分法计算速度中位数，最慢1，最快是piles中的最大值
    while (left < right) {
        mid = left + ((right - left) >> 1)
        //alltime(piles, mid)速度为mid的总用时
        if (alltime(piles, mid) > h) {//总用时超过h，速度不够快
            left = mid + 1//加快速度
        } else {
            right = mid
        }
    }
    return left
};
//计算总用时
function alltime(piles, speed) {
    let time = 0
    for (const val of piles) {
        time += Math.ceil(val / speed)
    }
    return time
}
// @lc code=end

