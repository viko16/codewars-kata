/**
 * 在这道题上犯了好几个错误，记录一下
 * 1. 不能在箭头函数里面用 arguments
 * 2. es6 的类还没有 private
 * 3. 此题会校验上下文，要保持 this 还是老老实实用 function() {} 吧
 * 4. 此题传入参数会带 undefined null，不能用 forEach 处理
 */

function Event() {
  let funcs = []
  this.subscribe = (...args) => {
    args.forEach(fn => {
      // 测试比较狡猾，有时候传进来的不是 function
      if (typeof fn === 'function') funcs.push(fn)
    })
  }
  this.unsubscribe = (...args) => {
    args.forEach(fn => {
      const idx = funcs.lastIndexOf(fn)
      if (idx >= 0) funcs.splice(idx, 1)
    })
  }
  this.emit = function (...args) {
    // 测试会改动 funcs，所以还是先复制一份
    const emit = [...funcs]
    emit.forEach(fn => fn.apply(this, args));
  }
}
