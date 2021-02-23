/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //方法一
    nums1.splice(m,n,...nums2);//splice切割数组  参数(下标,个数,插入的数)
    return nums1.sort((i,j)=>i-j)

    //方法二
    let len = m + n -1
    m = m-1
    n = n-1
    while(n>=0){
        console.log('------Mn',nums1[m], nums2[n]);
        nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
    return nums1
};
// @lc code=end

