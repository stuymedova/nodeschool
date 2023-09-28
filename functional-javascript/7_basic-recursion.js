// Implement Array#reduce using recursion.

// To test your reduction works correctly we will use your reduce
// implementation to execute our solution to the previous
// basic_reduce problem. i.e. your reduce function will be passed
// an array of words, and a function, and an initial value which
// will return an object containing the counts for each word found
// in the array. You don't need to implement this functionality,
// it will be supplied to your reduce implementation.

// For simplicity, your implementation of reduce need not replicate
// the behaviour of a reduce missing an initial value. You may
// assume the initial value will always be supplied.

// APPROACH 1
// function reduce(arr, fn, initialValue, currentValue = arr[0], i = 0) {
// 	const newValue = fn(initialValue, currentValue, i, arr);
// 	const nextIndex = i + 1;
// 	if (nextIndex < arr.length) {
// 		return reduce(arr, fn, newValue, arr[nextIndex], nextIndex);
// 	}
// 	return newValue;
// }

// APPROACH 2
function reduce(arr, fn, initialValue) {
	return (function reduceOne(index, value) {
		if (index >= arr.length) return value;
		const newValue = fn(value, arr[index], index, arr);
		return reduceOne(index + 1, newValue);
	})(0, initialValue);
}

// // APPROACH 3: non-recursive
// function reduce(arr, fn, initialValue) {
// 	arr.forEach((value, i) => {
// 		initialValue = fn(initialValue, value, i, arr);
// 	});
// 	return initialValue;
// }

module.exports = reduce;
