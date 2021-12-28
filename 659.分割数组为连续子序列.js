/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
    let max = nums[nums.length - 1]
    // arr：存储原数组中数字每个数字出现的次数
    // tail：存储以数字num结尾的且符合题意的连续子序列个数
    let arr = new Array(max + 2).fill(0),
        tail = new Array(max + 2).fill(0)
    for (let num of nums) {
        //每个数字出现次数哈希表
        arr[num]++
    }
    for (let num of nums) {
        //num出现次数为0
        if (arr[num] === 0) continue
        else if (tail[num - 1] > 0) {
            //tail[num - 1]  以num-1结尾的数量 ，表示可以往后面添加
            tail[num - 1]--
            tail[num]++
        } else if (arr[num + 1] > 0 && arr[num + 2] > 0) {
            //因为要3个连续数，所以如果上面不能再添加就找还没拼接的取出是否有num+1，num+2连续的数，有就创建一个新的连续数组
            //有就删掉缓存数量
            arr[num + 1]--
            arr[num + 2]--
            //添加记录以num+2结尾的数量
            tail[num + 2]++
        } else {
            return false
        }
        arr[num]--
    }
    return true
};
// @lc code=end
console.log(isPossible([6, 7, 8, 8, 9, 9, 10]));
