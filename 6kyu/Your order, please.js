function order (words) {
  let wordsArr = words.split(' ')
  wordsArr.sort((a, b) => {
    // 通过比较其中的数字来排序
    return /\d/.exec(a)[0] > /\d/.exec(b)[0]
  })
  return wordsArr.join(' ')
}
