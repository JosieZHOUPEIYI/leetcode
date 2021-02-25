/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //第k小数
    //思路，根据log(n+m)复杂度，即使用二分法查找，
    //假设每次两数组判断2/k哪个小，剔除小于的部分，相当于去掉不可能第k小的位置，
    //将两个新数组进入递归，并且 k 要减去排除的数字的个数。递归出口就是当 k=1 或者其中一个数字长度是0

    let n = nums1.length
    let m = nums2.length
    let left = Math.floor((n+m+1)/2)
    let right = Math.floor((n+m+2)/2)
    return (getKth(nums1,0,n-1,nums2,0,m-1,left) + getKth(nums1,0,n-1,nums2,0,m-1,right))/2
    // return getKth(nums1,0,n-1,nums2,0,m-1,left)

};
function getKth(nums1,start1,end1,nums2,start2,end2,k) { 
    // 让len1长度小于len2，这样保证如果有空数组，一定是len1
    const len1 = end1-start1+1
    const len2 = end2-start2+1
    if(len1>len2) return getKth(nums2,start2,end2,nums1,start1,end1,k)
    if(len1 == 0) return nums2[start2+k-1] 
    if(k==1) return Math.min(nums1[start1],nums2[start2])

    const i = Math.floor(start1 + Math.min(len1,k/2) -1)
    
    const j = Math.floor(start2 + Math.min(len2,k/2) -1)
    console.log('i',i,'j',j);
    console.log(nums1,nums1[i],nums2[j]);

    if(nums1[i] > nums2[j]){
        //num2前j位剔除
        return getKth(nums1,start1,end1,nums2,j+1,end2,k-Math.floor(Math.min(len2,k/2)))
    }else{
        return getKth(nums1,i+1,end1,nums2,start2,end2,k-Math.floor(Math.min(len1,k/2)))
    }
 }
// @lc code=end

