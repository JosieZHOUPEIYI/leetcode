/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // if(x<0) return false
    // s = x.toString()
    // if(s.length < 2) return true
    // const i = Math.floor((s.length - 1) / 2)
    // let [left,right] = [i,i]
    // if(s.charAt(i) === s.charAt(i+1) && s.length % 2 == 0){ //兼容1221
    //     right++
    // }
    // while(left>=0 && right <= s.length-1){
    //     if(s.charAt(left-1) != s.charAt(right+1)){
    //         return false
    //     }else{
    //         left--
    //         right++
    //     }
    // }
    // return true

    //反转x 反转数=原来x 即对称 
    //x<0 return false
    //时间复杂度O(n) 空间O(1)
    let res = 0
    let i = x
    if(x<0) return false
    while(i>=1){
        res = res*10 + parseInt(i % 10)
        i = parseInt(i / 10)
    }
    return res==x
};
// @lc code=end

console.log(isPalindrome(1000000001));

