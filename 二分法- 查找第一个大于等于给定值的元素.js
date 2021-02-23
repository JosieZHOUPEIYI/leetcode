// * 查找第一个大于等于给定值的元素


function find_first_large(arr,value){
    let low = 0
    let high = arr.length -1
    while(low<=high){
        let mid = low + ((high-low)>>1)
        if(arr[mid] >= value){
            if(mid==0 || arr[mid-1] < value){
                return mid
            }
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return -1
}

const index = find_first_large([1,2,2,2,3,4,4,5,5],2)
console.log('查找第一个大于等于给定值的元素',index);