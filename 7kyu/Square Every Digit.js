function squareDigits(num) {
  return parseInt([...num.toString()].map(item => item * item).join(''), 10)
}
