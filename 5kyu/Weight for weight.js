/**
 * NOTE: 最佳实践应当用 String.localeCompare 来比较数字
 */

function orderWeight (strng) {
  return strng.split(' ').sort((num1, num2) => {
    const wight1 = Number(counter(num1))
    const wight2 = Number(counter(num2))
    // 如果权重一样，就按原数字的字面上从小到大排
    if (wight1 === wight2) return compareNumber(num1, num2)
    // 否则就按权重从小大到排
    return wight1 - wight2
  }).join(' ')
}

// 将数字的每一位相加
function counter (num) {
  return [...num.toString()].reduce((a, b) => Number(a) + Number(b))
}

// 数字按字符串排序
function compareNumber (num1, num2) {
  if (num1 === num2) return 0
  // 随便加点字符串，比较时就不会隐式转义了
  // 注意：字符串需要加在前面，这样 'a200' 才会比 'a2' 小
  return (' ' + num1 > ' ' + num2) ? 1 : -1
}
