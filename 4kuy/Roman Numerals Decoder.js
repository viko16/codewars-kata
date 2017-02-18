function solution(roman) {
  // 对照表，从大到小去排
  const table = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  let num = 0
  for (const i in table) {
    // 从大数字到小数字去找，从左到右，当下一位数还是这个罗马数字的话就继续累加，直到找不到这个罗马数字为止
    while (roman.startsWith(i)) {
      num += table[i]
      roman = roman.slice(i.length) // 扔掉匹配到的头部哟
    }
  }
  return num
}
