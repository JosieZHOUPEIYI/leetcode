/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 思路。中心扩散,遍历s，看两边是否相等，计算相等的maxlen，不等就遍历下一个，注意baab这情况，截取字符
    //1、边界len<2 return
    //2 for(s)
    //3 遇到baab right+1
    //4 s.charAt(left) == s.charAt(right) ,left,right=i, left-- , right++ ,知道left=0，right=s.length
    //5.优化，当剩余字符长度小于maxlen，break
    if (s.length < 2) return s
    let maxLen = 0
    let start = 0
    for (i = 0; i < s.length; i++) {
        let left = i
        let right = i
        if (maxLen / 2 >= s.length - i) break
        while (right < s.length - 1 && s.charAt(right) == s.charAt(right + 1)) {
            right = right + 1
            i = i + 1
        }
        while (left > 0 && right < s.length - 1 && s.charAt(left - 1) == s.charAt(right + 1)) {
            left--
            right++
        }
        if (maxLen < right - left + 1) {//更新mexlen
            start = left
            maxLen = right - left + 1
        }
    }
    return s.substring(start, start + maxLen)
};

// console.log(longestPalindrome('abcuhucbaydfg'));
// @lc code=end

//复习
//思路 中心分散法
//1、边界s.length < 2 return 
//2 遍历s， left-1 的值等于right+1就继续 right++，left--，直到不等
//3、当maxlen > right-left+1 ,更新maxlen 和start，
//4 遍历完成return 切割的字符
//5、处理abba情况，当right值等于right+1，right右移一个位置，i也右移一个位置
//6、优化当s.length- i + 1 < 目前maxlen的一半时就不用遍历了，因为剩下的不可能大于maxlen
//index = length-1 length = index + 1
function longestPalindrome__(s) {
    let maxlen = 0;
    let start = 0
    if (s.length < 2) return s
    for (i = 0; i < s.length - 1; i++) {
        let [right, left] = [i, i]
        if (maxlen / 2 > s.length - i - 1) break
        while (left >= 0 && right < s.length - 1 && s.charAt(i) == s.charAt(i + 1)) {
            right++
            i++
        }
        while (left >= 0 && right < s.length - 1 && s.charAt(left - 1) == s.charAt(right + 1)) {
            left--
            right++
        }
        if (maxlen < right - left + 1) {
            maxlen = right - left + 1
            start = left
        }
    }
    return s.substring(start, maxlen + start)
}

//最长回文 left-- =? right--
const longestPalindrome_ = (s) => {
    const len = s.length
    let res = s[0], dp = Array.from(Array(len), () => Array(len).fill(false))
    if (len < 2) return s
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] == s[j]) {
                if (j - i < 2) dp[i][j] = true
                else dp[i][j] = dp[i + 1][j - 1]
                // 获取当前最长回文子串
                if (dp[i][j] && j - i + 1 > res.length) {
                    console.log(j, i);
                    res = s.substring(i, j + 1)
                }
            }
        }
    }
    return res
}

console.log('maxlen', longestPalindrome_('ab'));
console.log('maxlen', longestPalindrome__('aba'));


