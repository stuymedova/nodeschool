// Use Array#reduce to implement a simple version of Array#map.

function arrayMap(arr, fn, thisArg) {
	return arr.reduce((acc, el, i) => {
		acc.push(fn.call(thisArg, el, i, arr));
		return acc;
	}, []);
}

module.exports = arrayMap;