// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add(..._args) {
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };
    _adder.toString = () => _args.reduce((a, b)=> a + b);
    return _adder;
}


// const res = add(1,2,3,4)
// console.log(add(3)(2)(2).toString());
console.log(add(1,2,3,4).toString());