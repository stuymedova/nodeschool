// Given an Array of strings, use Array#reduce to create an object
// that contains the number of times each string occured in the
// array. Return the object directly (no need to console.log).

function countWords(inputWords) {
	return inputWords.reduce((acc, value) => {
		acc[value] = acc[value] + 1 || 1;
		return acc;
	}, {});
}

module.exports = countWords;
