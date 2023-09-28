// Implement a function that takes a function as its first
// argument, a number num as its second argument, then
// executes the passed in function num times.

function repeat(cb, num) {
	for (let i = 0; i < num; i++) {
		cb();
	}
}

// Recursive
// function repeat(cb, num) {
// 	if (num <= 0) return;
// 	cb();
// 	repeat(cb, num - 1);
// }

module.exports = repeat;
