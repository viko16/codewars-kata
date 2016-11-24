function getPINs (observed) {
  const table = {
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '2', '1', '3', '5' ],
    '3': [ '3', '2', '6' ],
    '4': [ '4', '1', '5', '7' ],
    '5': [ '5', '4', '2', '6', '8' ],
    '6': [ '6', '3', '5', '9' ],
    '7': [ '7', '4', '8' ],
    '8': [ '8', '5', '9', '7', '0' ],
    '9': [ '9', '6', '8' ]
  }

  let result = ['']

  // 循环输入的数字
  for (let digit of observed.toString()) {
    const line = table[digit]
    let newPos = []
    // 循环这行的元素，也就是它相近的元素
    for (let i of line) {
      // 把已有的跟这行的每一个元素拼接起来
      for (let j of result) {
        newPos.push(j + i + '')
      }
    }

    result = newPos
  }

  return result
}
