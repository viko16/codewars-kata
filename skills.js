/**
 * 任意转数组
 */
let toArr = any => [...any]

/**
 * 字符串转数组
 */
let strToArr = str => str.split('')

/**
 * 字符串排重
 */
let uniqueStr = str => [...new Set(str)].join('')

/**
 * 把数字当作字符串一样排序
 */
// 写法一：随便加点字符串，比较时就不会隐式转义了
let sortNumberAsString = numArr => numArr.sort((a, b) => {
  if (a === b) return 0
  // 注意：字符串需要加在前面，这样 'a200' 才会比 'a2' 小
  return ('str' + a > 'str' + b) ? 1 : -1
})
// 写法二：string.localeCompare
let sortNumberAsString2 = numArr => numArr.sort((a, b) => {
  return a.toString().localeCompare(b)
})

/**
 * 快速获取从 0 到 9 的数组
 */
let zeroToNine = Array.from({ length: 10 }, (k, v) => v)
