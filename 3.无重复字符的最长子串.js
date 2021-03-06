/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
    // 滑动窗口
    const strArr = s.split('')
    let temp = '' //窗口存储当前字符串，是不重复的字符
    let max = 0
    strArr.map(i=>{
        const curIndex = temp.indexOf(i)
        if(curIndex !== -1){
            // 如果存在 窗口去掉左边存在的字符
            console.log(temp,i);
            temp = temp.substring(curIndex+1)
        }
        // 窗口添加右边一个字符
        temp += i //temp
        // 上一个max和当前temp.length取最大
        max = Math.max(temp.length,max)
    })
    return max
};
// @lc code=end

var lengthOfLongestSubstring2 = function(s){
    let str = ''
    const strArr = s.split("")
    let max = 0
    for(i=0;i<strArr.length;i++){
        let index = str.indexOf(strArr[i])
        if(index!=-1){//存在
            str = str.substring(index)
        }
        max = Math.max(max,str.length)
        str+=strArr[i]
    }
    return max
}

console.log(lengthOfLongestSubstring2('abcdabcdf'));