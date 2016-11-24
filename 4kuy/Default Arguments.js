// 这题比较恶心：
// 因为不知道 func 的参数名，所以要用 func.toString() 去获得完整的函数定义，再提取出参数来

// 因此我也用了恶心的方法：
// 直接看测试用例再回推

function defaultArguments (func, params) {
  // 正则提取参数名，拆解成数组
  // eg. ['a', 'b']
  let argsArr = func.argsArr || func.toString()
    // 移除注释，移除空格
    .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
    // 提取括号里内容，逗号分割
    .match(/\((.*?)\)/im)[1].split(',')

  // 跟默认值组合起来
  // eg. [undefined, 3]
  let defaults = argsArr.map(item => params[item])

  let f = function () {
    const args = [...arguments]
    // 再一次填充参数
    args.forEach((item, index) => {
      defaults[index] = item
    })
    return func.apply(this, defaults)
  }

  // 有可能重复调用，所以把已经筛选的参数绑在返回的 function 对象上，以应付二次调用
  f.argsArr = argsArr
  return f
}
