/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //思路
    //从两边开始遍历，这是len最长，计算max，maxArea = len * min（height[left],height[right]）
    //直到指针重遇
    let [left,right,max] = [0,height.length-1,0]
    if(height.length < 2) return 0
    while(left<right){
        const len = right - left
        const area = Math.min(height[left],height[right]) * len
        if(height[left] >= height[right]){
            right--
        }else{
            left++
        }
        if(max < area){
            max = area
        }
    }
    return max
};
// @lc code=end

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
