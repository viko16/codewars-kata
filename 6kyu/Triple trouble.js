function tripledouble (num1, num2) {
  // 循环 0 - 9
  for (let i of '0123456789')
    if (num1.toString().includes(i.repeat(3)) && num2.toString().includes(i.repeat(2)))
      return 1
  return 0
}
