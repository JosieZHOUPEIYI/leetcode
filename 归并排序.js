/**
 * 原理：先分解再合并（只下而上）
 * 先让每个子序列有序，再将两个子序列有序，合并
 * 
 * 具体实现
 *  1/实现合并两个有序数组 merge函数
 *  2/合并左右
 */

 function merge(arr1,arr2) { //合并两个有序数组
    let new_arr = []
    let i =0,j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            new_arr.push(arr1[i++])
        }else{
            new_arr.push(arr2[j++])
        }
    }
    while(i < arr1.length){
        new_arr.push(arr1[i++])
    }
    while(j < arr2.length){
        new_arr.push(arr2[j++])
    }
    return new_arr
  }

  function merge_sort(arr) { //排序数组
    if(arr.length === 1) return arr
    const mid = Math.floor(arr.length/2)
    const arr1 = arr.slice(0,mid)
    const arr2 = arr.slice(mid)
    return merge(merge_sort(arr1),merge_sort(arr2))
   }

//   const arr = merge_sort([3,4,7,2,1,6,0,9])
//   console.log(arr);


// merge-合并两有序数组，
// sort_merge 排序数组并合并
  function merge_1(arr1,arr2){
    //   创建新数组，
    let new_arr = []
    let i=0,j = 0
    // 处理边界
    while(i < arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            new_arr.push(arr1[i++])
        }else{
            new_arr.push(arr2[j++])
        }
    }
    while(i< arr1.length){
        new_arr.push(arr1[i++])
    }
    while(j<arr2.length){
        new_arr.push(arr2[j++])
    }
    console.log(222,new_arr);
    return new_arr
  }

//   递归合并左右

function merge_sort_1(arr){
    if(arr.length===1) return arr
    const mid = Math.floor(arr.length/2)
    const arr1 = arr.slice(0,mid)
    const arr2 = arr.slice(mid)
    return merge_1(merge_sort_1(arr1),merge_sort_1(arr2))
}

const arr = merge_sort_1([3,4,7,2,1,6,0,9])
console.log(arr);

