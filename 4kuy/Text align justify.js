/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
const justify = function (str, len) {
  let strArr = str.split(' ')
  let lines = []
  const SPACE = ' '

  // 拆行
  let last = strArr.reduce((prevWord, currWord) => {
    // 判断是不是够一行的长度了，是的话就直接返回，不是就加上下一只再返回
    // 返回的值就成了下一次循环的 prevWord
    if (prevWord.length + SPACE.length + currWord.length > len) {
      lines.push(prevWord)
      return currWord
    } else {
      return prevWord + SPACE + currWord
    }
  })

  // 扩展已有的空格
  lines = lines.map(lineStr => {
    // 每一行的元素，类似 'ipsum dolor sit''
    let arr = lineStr.split(' ')
    // 计算这一行还能加多少空格
    const gap = len - lineStr.trim().length
    // 在除了最后一个之外循环，加空格
    for (let i = 0; i < gap; i++) {
      arr[i % (arr.length - 1)] += SPACE
    }
    return arr.join(' ')
  })

  // 最后再拼回去
  lines.push(last)
  return lines.join('\n')
}
