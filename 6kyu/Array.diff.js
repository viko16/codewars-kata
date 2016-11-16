function array_diff (a, b) {
  return a.filter(el => !b.includes(el))
}
