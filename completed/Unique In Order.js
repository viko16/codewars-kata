var uniqueInOrder = function (iterable) {
  let arr = [...iterable]
  // 把当前元素等于上一个元素的都抛弃掉
  // 注意 首个元素 arr[-1] 是 undefined
	return arr.filter((el, index) => el !== arr[index - 1])
}
