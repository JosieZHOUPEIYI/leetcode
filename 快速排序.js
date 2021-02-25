/** 
 * 1/定义一个基数
 * 2/从左向右、右向左开始遍历，当左指针遇到比基数大的，和右指针比基数小的互换位置，指针相遇时交换基数位置
 * 3/递归基数左边和右边数组
*/

const arr = [8,10,2,3,6,1,5,2,3,3]
function quickSort(arr,left,right){
    let l = left
    let r = right
    let tar = arr[left]
    if(left>=right) return arr
    if(arr.length ===1) return arr
    while(l<r){
        while(l<r && arr[r] >= tar){
            r--
        }
        while(l<r && arr[l] <= tar){
            l++
        }
        // 交换左右指针
        if(arr[l] > arr[r]){
            [arr[l],arr[r]] = [arr[r],arr[l]]
        }
    }
    // 重遇r=l 指针l 互换位置
    [arr[left],arr[l]] = [arr[l],arr[left]]
    // 递归两边
    quickSort(arr,left,l-1)
    quickSort(arr,l+1,right)
    return arr
}

// console.log(quickSort(arr,0,arr.length-1));

/** 
 * 原理：分治思想，先让指针左边小于于基数，指针右边大于基数，递归基数左边，右边
 * 具体：
 * 制定基数，
 * 遍历左右两边，和基数对比，找左边比基数大，右边比基数小的数，交换
 * 递归基数左边和右边
*/
function quickSort_1(arr,left,right){
    let l = left
    let r = right
    const tar = arr[left]
    // 设定边界条件
    if(arr.length===1) return arr
    if(left >= right) return arr
    while(l<r){
        while(l<r && arr[r] >= tar){
            r--
        }
        while(l<r && arr[l] <= tar){
            l++
        }
        //指针停住，交换左右指针位置
        if(arr[l] > arr[r]){
            [arr[l],arr[r]] = [arr[r],arr[l]]
        }
    }
    // 交换基数和指针位置
    if(tar > arr[l]) [arr[left],arr[l]] = [arr[l],arr[left]]
    quickSort_1(arr,left,l)
    quickSort_1(arr,l+1,right)
    return arr
}
console.log(quickSort_1(arr,0,arr.length-1));