function pascalsTriangle (n) {
  // Pascal's triangle 也就是杨辉三角

  let results = []
  let preRow = [1]

  /**
   * 计算每一行的情况
   *
   * @param {number} row 第几行
   * @param {array} preArr 上一行情况
   * @returns {array}
   */
  function everyRow (row, preArr) {
    // 每行最左最右都是 1
    const curr = []
    curr[0] = curr[row - 1] = 1
    // 根据上一行计算
    for (let i = 1; i < row - 1; i++) {
      curr[i] = preArr[i - 1] + preArr[i]
    }
    return curr
  }

  for (let i = 1; i <= n; i++) {
    let currRow = everyRow(i, preRow)
    results.push(...currRow)
    preRow = currRow
  }

  return results
}
