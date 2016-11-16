function convertFrac (lst) {
  if (!lst.length) return ''
  // 提取每项的第二位出来
  const denominators = lst.map(([x, num]) => num)
  // 计算出所有数字的最小公倍数
  let multiple = denominators.reduce(lcm)
  // 剩下的就是字符串拼接了
  return lst.map(item => `(${multiple/item[1]*item[0]},${multiple})`).join('')
}

// 最大公约数
function gcd (a , b) {
  // 辗转相除法
  // https://zh.wikipedia.org/zh-cn/%E8%BC%BE%E8%BD%89%E7%9B%B8%E9%99%A4%E6%B3%95
  return a % b ? gcd(b, a % b) : b
}

// 最小公倍数
function lcm (a, b) {
  if (a * b === 0) return 0
  return a * b / gcd(a, b)
}
