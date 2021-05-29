// * 查找最后一个小于等于给定值的元素
function find_first_less(arr,value) { 
    let low = 0;
    let high = arr.length - 1
    while(low<=high){
        const mid = low + ((high-low)>>1)
        if(arr[mid]<=value){
            if(mid==arr.length-1||arr[mid+1]>value)return mid
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
 }

const index = find_first_less([1,2,2,2,3,4,4,5,5],5)
console.log('查找最后一个小于等于给定值的元素',index);