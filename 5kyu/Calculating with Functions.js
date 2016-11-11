// 如果 fn 不存在，那它就是右数字，就直接返回数字
// 如果 fn 存在，那它就是左数字，就执行里面的 fn 吧，并最终返回 fn 的返回值
function zero (fn) { return fn ? fn(0) : 0 }
function one (fn) { return fn ? fn(1) : 1 }
function two (fn) { return fn ? fn(2) : 2 }
function three (fn) { return fn ? fn(3) : 3 }
function four (fn) { return fn ? fn(4) : 4 }
function five (fn) { return fn ? fn(5) : 5 }
function six (fn) { return fn ? fn(6) : 6 }
function seven (fn) { return fn ? fn(7) : 7 }
function eight (fn) { return fn ? fn(8) : 8 }
function nine (fn) { return fn ? fn(9) : 9 }

// 1. 肯定有参数
// 2. 参数里的肯定是操作符右边的数字
// 3. 返回的方法会被最外面的执行
function plus (rightNum) { return function (leftNum) { return leftNum + rightNum } }
function minus (rightNum) { return function (leftNum) { return leftNum - rightNum } }
function times (rightNum) { return function (leftNum) { return leftNum * rightNum } }
function dividedBy (rightNum) { return function (leftNum) { return leftNum / rightNum } }
