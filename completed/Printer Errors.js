function printerError(s) {
	let result = s.match(/[n-z]/g)
  // match 可能返回 Array 或者 null，所以要判断
	return (result ? result.length : 0) + '/' + s.length
}
