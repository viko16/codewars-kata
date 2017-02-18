function incrementString(strng) {
  return strng.replace(/(\d*)$/, match => {
    // 先加一，此操作会去掉前置的 0
    let num = Number(match) + 1
    let len = num.toString().length
    // 前置补0
    while (len < match.length) {
      num = '0' + num
      len++
    }
    return num
  })
}
