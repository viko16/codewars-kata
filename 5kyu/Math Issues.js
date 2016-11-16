/**
 * NOTE: 说来惭愧，还没达到 Best practice
 */

Math.round = function (number) {
  const arr = number.toString().split('.', 2)
  if (number - arr[0] >= 0.5) return parseInt(arr[0], 10) + 1
  return parseInt(number, 10)
}

Math.ceil = function (number) {
  const arr = number.toString().split('.', 2)
  if (number - arr[0] > 0) return parseInt(arr[0], 10) + 1
  return parseInt(number, 10)
}

Math.floor = function (number) {
  const arr = number.toString().split('.', 2)
  return parseInt(arr[0], 10)
}
