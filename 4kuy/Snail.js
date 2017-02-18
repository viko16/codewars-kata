const snail = function (array) {
  /**
   * 分析：
   * 类似跑火车，其实就是分为上下左右四个方向的运动，而且经过之后消去
   * 所以还是得写四个方法去递归...
   */

  // 转向右
  const turnRight = ([top, ...rest]) => {
    if (!top.length) return []
    // 取出第一行整行
    return top.concat(turnDown(rest))
  }

  // 转向下
  const turnDown = arr => {
    if (!arr.length) return []
    // 取出所有行的最后一列
    const right = arr.map(i => i[i.length - 1])
    // 留下除了最后一列传给左转函数
    const rest = arr.map(i => i.slice(0, -1))
    return right.concat(turnLeft(rest))
  }

  // 转向左
  const turnLeft = arr => {
    if (!arr.length) return []
    // 就是最后一行的翻转
    const reversedBottom = arr[arr.length - 1].slice().reverse()
    // 留下除了最后一行的传给向上函数
    const rest = arr.slice(0, -1)
    return reversedBottom.concat(turnUp(rest))
  }

  // 转向上
  const turnUp = arr => {
    if (!arr.length) return []
    // 取第一列的翻转（因为向上）
    const reversedLeft = arr.map(i => i[0]).reverse()
    // 留下除了最左边的
    const rest = arr.map(i => i.slice(1))
    return reversedLeft.concat(turnRight(rest))
  }

  return turnRight(array)
}
