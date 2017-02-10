function dblLinear(n) {
  const arr = [1]
  let count2 = 0;
  let count3 = 0;
  let countBoth = 0;

  while (count2 + count3 < n + countBoth) {
    const e2 = arr[count2] * 2 + 1
    const e3 = arr[count3] * 3 + 1
    if (e2 < e3) {
      arr.push(e2)
      count2++
    } else if (e2 > e3) {
      arr.push(e3)
      count3++
    } else {
      // 避免重复
      arr.push(e2)
      count2++
      count3++
      countBoth++
    }
  }
  return arr.pop()
}
