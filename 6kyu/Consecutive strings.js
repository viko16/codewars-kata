function longestConsec (strarr, k) {
  if (strarr.length < 1 || k > strarr.length || k <= 0)
    return ''

  let longest = ''
  for (let i = 0; i <= strarr.length; i++) {
    let thisStr = ''
    // 数组的第 i 到 i + k 项字符串凑起来
    for (let j = i; j < k + i; j++) {
      thisStr += (strarr[j] || '')
    }
    // 比最长
    if (longest.length < thisStr.length) {
      longest = thisStr
    }
  }
  return longest
}
