function sum (num) {
  if (num <= 0) return 0
  const arr = Array(num + 1).fill(0)
  // 至少有一个，自身
  arr[0] = 1

  // 其实就是从小到大一直加上去
  for (let i = 1; i <= num; i++)
    for (let j = i; j <= num; j++)
      arr[j] += arr[j - i]

  return arr[num]
}
