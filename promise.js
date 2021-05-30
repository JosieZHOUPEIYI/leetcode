// promise.all实现
const promiseAll = (promises)=>{
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises))return reject(new TypeError('argument must be an array'))
        var countNum = 0
        var promiseNum = promises.length
        var resolvedvalue = new Array(promiseNum)
        console.log(countNum,resolvedvalue,promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function (i) { 
                Promise.resolve(promises[i].then(
                    (val)=>{
                        console.log(val);
                        countNum++;
                        resolvedvalue[i] = val
                        if(promiseNum === countNum) return resolve(resolvedvalue)
                    },(err)=>reject(err)))
            })(i)     
        }
    })
}

function PromiseAll(promises) {
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises))return reject(new TypeError('argument must be an array'))
        var promiseNum = promises.length
        var resolvedvalue = new Array(promiseNum)
        var count = 0
        for (let index = 0; index < promiseNum; index++) {
            console.log(index);
            (function (index) {
                Promise.resolve(promises[index].then((val)=>{
                    count++
                    resolvedvalue[index] = val
                    if(count===promiseNum) return resolve(resolvedvalue)
                },(err)=>{
                    return reject(err)
                }))
            })(index)
        }
    })
    
}

var p1= Promise.resolve(1),
p2= Promise.resolve(3),
p3= Promise.resolve(3);
PromiseAll([p1,p2,p3]).then(function(value){
    console.log(111,value)
}).catch(err=>{
    console.log(2333,err);
})

