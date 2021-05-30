function compose(middlewarea){
    return function (num) {
        return dispatch(0)
        function dispatch(i) {
            let fn = middlewarea[i]
            if(!fn){
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next(){
                    return dispatch(i+1) //递归
                },num)
            )
        }
    }
}

async function fn1(next,num) {
    console.log('fn1',num);
    await next()
    console.log('end fn1');
}

async function fn2(next,num) {
    console.log('fn2');
    await next()
    console.log('end fn2');
}

async function fn3(next,num) {
    console.log('fn3');
    await next()
    console.log('end fn3');
}

compose([fn1,fn2,fn3])(1)

