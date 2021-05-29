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
    //类似第k小数
    //思路，根据log(n+m)复杂度，即使用二分法查找，
    //假设每次两数组判断2/k哪个小，剔除小于的部分，相当于去掉不可能第k小的位置，
    //将两个新数组进入递归，并且 k 要减去排除的数字的个数。递归出口就是当 k=1 或者其中一个数字长度是0
    let n = nums1.length
    let m = nums2.length
    //取第几小第数如下
    //getKth(nums1,0,n-1,nums2,0,m-1,k)

    //取中位数，
    //奇数：在n+m+1/2位置，偶数 在 n+m+1/2 + n+m+2/2 位置，都取Math.floor()
    let left = Math.floor((n+m+1)/2)
    let right = Math.floor((n+m+2)/2)
    
    //将n+m偶数和奇数的情况合并，如果是奇数，会求两次同样的 k 再取平均值
    return (getKth(nums1,0,n-1,nums2,0,m-1,left) + getKth(nums1,0,n-1,nums2,0,m-1,right))/2
};
function getKth(nums1,start1,end1,nums2,start2,end2,k) { 
    const len1 = end1-start1+1//nums1长
    const len2 = end2-start2+1//nums2长
    // 让len1长度小于len2，这样保证如果有空数组，一定是len1
    if(len1>len2) return getKth(nums2,start2,end2,nums1,start1,end1,k)
    //len1最小，所以len1最先减少至0，当len1=0时，只需取len2[start+剩余k值。。。]
    if(len1 == 0) return nums2[start2+k-1] 
    // k=1时，证明再移动1位，就到目标数。
    if(k==1) return Math.min(nums1[start1],nums2[start2])
    // 取移动后的数，还需判断，len和k/2哪个小，可能存在len比较小的情况，证明这某数组数量已经不够扣了
    const i = Math.floor(start1 + Math.min(len1,k/2) -1)
    const j = Math.floor(start2 + Math.min(len2,k/2) -1)
    // 取比较小的哪个
    // 当然存在num1[i] = num2[j]的时候，这是无论去掉哪个都可，因为去掉一个总会保留另一个的最大数
    if(nums1[i] > nums2[j]){
        //num2前j位剔除
        return getKth(nums1,start1,end1,nums2,j+1,end2,k-Math.floor(Math.min(len2,k/2)))
    }else{
        return getKth(nums1,i+1,end1,nums2,start2,end2,k-Math.floor(Math.min(len1,k/2)))
    }
 }
// @lc code=end

//复习
//两数组取前k小数
//提升：len = index + 1，index = len -1，k/2向下取整
function getKth_(nums1,start1,end1,nums2,start2,end2,k){
    //1、len1> le2 交换数组位置,始终保持len1小,
    const len1 = end1 - start1 + 1
    const len2 = end2 - start2 + 1
    if(len1>len2) return getKth_(num2,start2,end2,num1,start1,end1,k)
    //2、len1 == 0 有1，所以len1最先 = 0 ，这时取nums2[?]
    if(len1===0) return num2[start2+k-1]
    //3、k == 1 即下一位就是目标值，判断len[start]哪个小即可
    if(k===1)return Math.min(nums1[start1+k-1],nums2[start2+k-1])
    //4、取i、j 下一次start位置 要和len判断大小，取小
    const i = start1 + Math.min(len1,Math.floor(k/2)) - 1
    const j = start2 + Math.min(len2,Math.floor(k/2)) - 1
    //5、nums1[i] > nums2[j] 小的那个移动start位置,下次k移动位置，k-这次移动位置
    if(nums1[i] > nums2[j]){
        return getKth_(nums1,start1,end1,nums2,j+1,end2,k-Math.min(len2,Math.floor(k/2)))
    }else{
        return getKth_(nums1,i+1,end1,nums2,start2,end2,k-Math.min(len1,Math.floor(k/2)))
    }
}

const nums1 = [1,2,3,7,9]
const nums2 = [6,7,8,9,10]
// console.log('取前k小',getKth_(nums1,0,nums1.length-1,nums2,0,nums2.length-1,5));

//前k小 len = index + 1  index = len-1
function __getKth(nums1,start1,end1,nums2,start2,end2,k) {
    const len1 = end1- start1 + 1;
    const len2 = end2- start2 + 1;
    //边界
    //1始终保持l1最最短
    if(len1<len2) return __getKth(nums2,start2,end2,nums1,start1,end1,k)
    //2、l1长度最先到0，到0 就表示k+1就是目标值
    if(len1.length=0) return nums2[start2+k-1]
    if(k===1)return Math.min(nums1[start1+k-1],nums2[start2+k-1])
    //3、比较l1和l2 2/k位置的值大小，对比len ,小的那个去掉2/k或 len 个数
    const tar = Math.floor(k/2) //每次位移数
    const tar1 = start1 + Math.floor(Math.min(len1,tar))
    const tar2 = start2 + Math.floor(Math.min(len2,tar))
    //4、改变num1 num2 start位置 递归 
    if(nums1[tar1]>nums2[tar2]){//重置start2
        return __getKth(nums1,start1,end1,nums2,tar2,end2,k - Math.min(len1,tar))
    }else{
        return __getKth(nums1,tar1,end1,nums2,start2,end2,k - Math.min(len1,tar))
    }
}   


console.log('取前k小',__getKth(nums1,0,nums1.length-1,nums2,0,nums2.length-1,5));
