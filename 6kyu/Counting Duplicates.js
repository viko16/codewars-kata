function duplicateCount(text) {
  const txt = text.toLowerCase()
  const s = new Set(txt)
  let count = 0
  s.forEach(char => {
    // 只要在字符串里有重复就可以计数了，不需关心重复了多少次
    if (txt.indexOf(char) !== txt.lastIndexOf(char)) {
      count++
    }
  })
  return count
}
