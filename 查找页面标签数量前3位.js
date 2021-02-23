/**
 * 思路：
 * 1.先计算出所有标签数量，使用临时对象存储
 * 2.排序+取出前三位
 */
// let ele = ["html", "head", "script", "script", "style.vjs-styles-defaults", "meta", "meta", "meta", "meta", "script", "script","script","html"]
let ele = document.getElementsByTagName('*')
var keysNum = [...ele].map(i=>i.nodeName).reduce((total,tag)=>{
    if(total[tag]){
        total[tag]+=1
    }else{
        total[tag] = 1
    }
    return total
},{})

// 排序+取前三位
let sortKey = Object.keys(keysNum).sort((i,k)=>keysNum[k] - keysNum[i]).splice(0,3)

console.log(keysNum);
console.log(sortKey);