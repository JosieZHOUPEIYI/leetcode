/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 双指针
    // 先排序nums
    // 遍历，计算 min(i+l+r-target)
    // 判断移动哪个指针，i+l+r值 > tartget ,r--， 否则l++
    let min = null
    let tar = null
    const list = nums.sort((a,b)=>a-b)
    for(i=0;i<list.length;i++){
        let [left,right] = [i+1,list.length-1]
        while (left<right) {
            const range = Math.abs(list[i] + list[left] + list[right] - target)
            const now = list[i] + list[left] + list[right]
            if(!min || min>=range){
                min = range
                tar = now
            }
            //判断移动哪个指针 a+b+c > target 证明现在val超出了，右指针左移来接近目标值
            if (list[i] + list[left] + list[right] > target) {
                right--;
            } else if (list[i] + list[left] + list[right] < target) {
                left++;
            } else {
                return target;
            }
        }
    }
    return tar

};
// @lc code=end

console.log(threeSumClosest([-3,0,1,2],1));

·