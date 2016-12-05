// 传进来的会是四个之一 "add", "subtract", "divide", "multiply"
// 那判断首字母就够了

function arithmetic (a, b, operator) {
  switch (operator[0]) {
    case 'a': return a + b
    case 's': return a - b
    case 'm': return a * b
    case 'd': return a / b
  }
}
