// Your program will get some html written to stdin. Convert all the inner
// html to upper-case for elements with a class name of "loud", and pipe all
// the html to stdout.

const through2 = require('through2');
const trumpet = require('trumpet');

const tr = trumpet();

const loud = tr.selectAll('.loud').createStream();
loud
	.pipe(through2(function(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	}))
	.pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
