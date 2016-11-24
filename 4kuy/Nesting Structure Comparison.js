Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (!Array.isArray(other)) return false

  return check(this, '') === check(other, '')
}

function check (origin, counter) {
  if (Array.isArray(origin)) {
    for (let item of origin) {
      if (Array.isArray(item)) {
        counter += 'A'
        // 是数据就递归遍历好了
        counter = check(item, counter)
      } else {
        counter += 'I'
      }
    }
  }
  return counter
}
