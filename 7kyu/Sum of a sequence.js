function sequenceSum(begin, end, step) {
  if (begin > end) return 0
  let rst = [begin]
  while (rst[rst.length - 1] + step <= end) {
    rst.push(rst[rst.length - 1] + step)
  }
  return rst.reduce((a, b) => a + b)
}
