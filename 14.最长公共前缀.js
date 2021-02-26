/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //指定其中一个做标准
    let first = strs[0] || ''
    //遍历数组
    for(i=1;i<strs.length;i++){
        //和fist对比，是否以first开头，first就重后面开始切割
        while (!strs[i].startsWith(first)) {
            console.log(first,strs[i]);
            if(first.length==0) return ''
            first = first.substring(0,first.length-1)
        }
    }
    return first
};
// @lc code=end
console.log(longestCommonPrefix(['sidi','sidiuyu','sillk']));

