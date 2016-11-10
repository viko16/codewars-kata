function longest(s1, s2) {
  // Set 排重真的太棒了！！
  const set = new Set(s1 + s2)
  // Set -> 数组 -> 排序 -> 转成字符串
  // 默认的排序就是按字母顺序
  return [...set].sort().join('')
}
