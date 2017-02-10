function sequenceSum(begin, end, step) {
  // 等差数列求和公式：（首项 + 末项）* 项数 / 2
  // 等差数列第 n 项：首项 + (n - 1) * 公差

  // 项数
  const size = Math.floor((end - begin) / step) + 1
  if (size < 0) return 0
  // 首项 begin
  // 末项
  const last = begin + (size - 1) * step
  return (begin + last) * size / 2
}
