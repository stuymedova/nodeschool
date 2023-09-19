// Convert data from process.stdin to upper-case data on process.stdout using
// the through2 module.

const through2 = require('through2');

process.stdin
	.pipe(through2(function (chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	}))
	.pipe(process.stdout);

// ALTERNATIVE APPROACH
// const { Transform } = require('stream');

// const transformer = new Transform();
// transformer._transform = function(chunk, enc, callback) {
// 	this.push(chunk.toString().toUpperCase());
// 	callback();
// };
// process.stdin
// 	.pipe(transformer)
// 	.pipe(process.stdout);
