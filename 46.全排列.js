/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// let permute = function (nums) {
//     const len = nums.length, res = [];
//     function dfs(s, path = []) {
//         if (path.length === len) return res.push(path)
//         for (const key in s) {
//             let _s = [...s.slice(0, key), ...s.slice((+key) + 1)]
//             let _path = [...path, s[key]]
//             dfs(_s, _path)
//         }
//     }
//     dfs(nums)
//     return res
// }

let permute = function (nums) {
    const len = nums.length, res = [], use = [];
    (function dfs(path = []) {
        /**为什么加入解集时，要将数组内容拷贝到一个新的数组里，再加入解集。
        因为该 path 变量存的是地址引用，结束当前递归时，将它加入 res 后，
        还要进入别的递归分支继续搜索，还要继续传递该 path 给别的递归调用，
        它所指向的内存空间还要继续被操作，所以 res 中的 path 的内容会被改变，
        这就不对。所以要弄一份当前的拷贝，放入 res，这样后续对 path 的操作，
        就不会影响已经放入 res 的内容。*/
        if (path.length === len) return res.push([...path])
        for (const val of nums) {
            //没有出现过
            if (!use[val]) {
                //添加到path
                path.push(val)
                //标记为已使用
                use[val] = true
                //递归path
                dfs(path)
                //递归退出后撤销path，回溯上一步
                path.pop()
                use[val] = false
            }
        }
    })()
    return res
}
// @lc code=end

//简化
const permute1 = (nums) => {
    const res = []; const used = {};
    (function dfs(path = []) {
        if (path.length == nums.length) return res.push(path)
        for (const num of nums) { // for枚举出每个可选的选项
            if (!used[num]) { //避免重复递归  或者!path.includes(num)，当前的num不存在于path
                used[num] = true;       // 记录一下 使用了
                dfs([...path, num]);    // 基于选了当前的数，递归
                used[num] = false;      // 撤销这个记录
            }
        }
    })()// 递归的入口，空path传进去
    return res;
};

console.log(permute1([1, 2, 3]));
// console.log(permute([1, 2, 3]));
