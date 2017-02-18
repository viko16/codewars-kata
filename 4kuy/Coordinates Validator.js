function isValidCoordinates(coordinates) {
  const [first, second] = coordinates.split(', ')
  // 不能有字母
  // 纬度 -90 ~ 90
  // 经度 -180 ~ 180
  return !/[a-z]/ig.test(coordinates) && Math.abs(first) <= 90 && Math.abs(second) <= 180
}
