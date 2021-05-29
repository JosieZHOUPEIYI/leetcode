/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 排序+双指针
    // 结合两数只和 a + b = -c
    // 避免重复
    if(!nums || nums.length < 3) return []
    nums.sort((i,j)=>i-j)
    let res = [],left ,right
    for (var i = 0; i < nums.length;i++){
        if(nums[i] > 0) break
        // i重复，去重
        if(i > 0 && nums[i] === nums[i-1]) continue
        left = i + 1
        right = nums.length - 1;
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                res.push([nums[i],nums[left],nums[right]])
                // 去重
                while(left < right && nums[left] === nums[left+1])left++
                while(left < right && nums[right] === nums[right-1])right--
                left++
                right--
            }else if(sum > 0)right--
            else if(sum < 0)left++
            
        }
    }
    return res

};
// @lc code=end

