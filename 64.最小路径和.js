/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 * 思路：动态规划 ij最小路径和= 当前项 + 上项或者左项的最小值：grid[i][j] += Math.min(grid[i-1][j] + grid[i][j-1])
 * 处理第一行和第一列，因为只能一个方向走 ：grid[i][0] += grid[i-1][0] ;grid[0][j] += grid[0][j-1]
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const row = grid.length; col = grid[0].length
    for (let i = 1; i < row; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let j = 1; j < col; j++) {
        grid[0][j] += grid[0][j - 1]
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j])
        }
    }
    return grid[row - 1][col - 1]
};
// @lc code=end

