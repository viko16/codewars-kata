function solution(number) {
  // 对照表，从大到小去排
  const table = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  let str = ''
  for (const i in table) {
    while (number >= table[i]) {
      str += i
      number -= table[i]
    }
  }
  return str
}
