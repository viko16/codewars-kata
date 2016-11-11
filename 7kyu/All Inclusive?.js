function containAllRots (str, arr) {
  const len = str.length

  for (let i of str) {
    // 改变一下字符串的顺序，把最后一位挪第一位
    str = str[len - 1] + str.substr(0, len - 1)
    // 只要 arr 里面不包含这个「错序」字符串，那都是错的
    if (!~arr.indexOf(str)) return false
  }
  // 一直没错就行了
  return true
}
