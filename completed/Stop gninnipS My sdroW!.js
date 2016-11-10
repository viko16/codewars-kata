function spinWords () {
  // 参数先按空格分割为数组 strArr
  let strArr = arguments[0].toString().split(' ')
  // 遍历数组，如果元素里字符串长度大于 5 就翻转
  // 字符串翻转：字符串 -> 数组 -> 数组翻转 -> 重新合成字符串
  // 最后再把数组 strArr 合成回字符串
  return strArr.map(el => el.length >= 5 ? [...el].reverse().join('') : el).join(' ')
}
