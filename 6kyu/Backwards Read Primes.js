// 数字翻转
const reverse = num => Number([...String(num)].reverse().join(''))

// 判断素数
const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0)
      return false
  return true
}

function backwardsPrime (start, stop) {
  const primes = []
  // 先把范围内的素数找出来
  for (let i = start; i <= stop; i++)
    if (isPrime(i))
      primes.push(i)

  // 只留下那些回文也是素数的
  return primes.filter(item => (reverse(item) !== item) && isPrime(reverse(item)))
}
