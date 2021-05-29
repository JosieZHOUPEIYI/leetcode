/** 
 * 查找第一个值等于给定值的元素
 * */ 

 function find_first(arr,value){
     let low = 0
     let high = arr.length-1
     while (low<=high){
        let mid = low + ((high - low) >> 1)
        // console.log('mid',mid,arr[mid]);
        // console.log('low,high',low,high);
        if(arr[mid] > value){
            high = mid -1
        }else if(arr[mid] < value){
            low = mid + 1
        }else{
            if(mid == 0 || arr[mid-1] !=value){
                return mid
            }else{
                high = mid - 1
            }
        }
     }
     return -1
 }

 const index = find_first([1,2,2,2,3,4,4,5,5],5)
 console.log('符合条件的第一个数的位置',index);