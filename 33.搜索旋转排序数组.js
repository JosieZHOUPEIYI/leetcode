/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //方法一：先遍历数组找到旋转点，对旋转点左右两边的子数组分别二分查找
    //方法三：先根据 nums[mid] 与 nums[low] 的关系判断 mid 是在左段还是右段，接下来再判断 target 是在 mid 的左边还是右边，从而来调整左右边界 lo 和 hi
    let lo = 0;
    let hi = nums.length - 1
    while(lo<=hi){
        const mid = lo + ((hi-lo)>>1)
        if(nums[mid] === target)return mid
        // 先判断mid在哪侧
        if(nums[mid]>=nums[lo]){//在左半段
            // 判断target位置
            if(target<nums[mid] && target>=nums[lo]){
                hi = mid -1
            }else{
                lo = mid +1
            }
        }else{//在右半段
            if(nums[mid] < target && target <=nums[hi]){
                lo = mid + 1
            }else{
                hi = mid -1
            }
        }
    }
    return -1

};

function search_(nums,target){
    let lo = 0;
    let hi = nums.length - 1
    while(lo<=hi){
        const mid = lo + ((hi-lo)>>1)
        console.log(1111,mid,nums[mid],nums[lo]);
        if(nums[mid] === target)return mid
        // 先判断mid在哪侧
        if(nums[mid]>=nums[lo]){//在左半段
            // 判断target位置
            if(target<nums[mid] && target>=nums[lo]){
                hi = mid -1
            }else{
                lo = mid +1
            }
        }else{//在右半段
            if(nums[mid] < target && target <=nums[hi]){
                lo = mid + 1
            }else{
                hi = mid -1
            }
        }
    }
}
// @lc code=end
