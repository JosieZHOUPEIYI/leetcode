/**
 * 查找最后一个值等于给定值的元素
 */

 function find_last(arr,value) { 
     let low = 0;
     let high = arr.length -1
     while(low<=high){
        let mid = low + ((high-low)>>1)
        if(arr[mid] > value){
            high = mid -1 
        }else if(arr[mid] < value){
            low = mid + 1
        }else{
            if(mid == arr.length-1 || arr[mid+1] !== value)return mid
            else low = mid + 1
        }
     }
     return -1
  }

  const index = find_last([1,2,2,2,3,4,4,5,5],4)
  console.log('查找最后一个值等于给定值的元素',index);

