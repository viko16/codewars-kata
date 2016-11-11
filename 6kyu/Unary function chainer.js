function chained (functions) {
  return function (x) {
    // array.reduce(callback(previousValue, currentValue), initialValue)
    return functions.reduce((pre, curr) => {
      return curr(pre)
    }, x)
  }
}
