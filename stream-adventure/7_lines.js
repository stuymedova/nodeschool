// For this challenge, convert even-numbered lines to upper-case and
// odd-numbered lines to lower-case. Consider the first line to be
// odd-numbered. For example given this input:

//    One
//    Two
//    Three
//    Four

// Your program should output:

//    one
//    TWO
//    three
//    FOUR

// Even though it's not obligatory, you can use the split2 module to split
// input by newlines.

const split2 = require('split2');
const through2 = require('through2');

let isOdd = true;

process.stdin
	.pipe(split2())
	.pipe(through2(function(line, encoding, callback) {
		isOdd
			? this.push(line.toString().toLowerCase() + '\n')
			: this.push(line.toString().toUpperCase() + '\n');
		isOdd = !isOdd;
		callback();
	}))
	.pipe(process.stdout);
