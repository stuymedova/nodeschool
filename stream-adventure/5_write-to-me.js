// Implement a writable stream that writes in console "writing: " + the given
// chunk. And pipe it to process.stdin.

const { Writable } = require('stream');

const myStream = new Writable();
myStream._write = (chunk, encoding, callback) => {
	console.log('writing: ' + chunk);
	callback();
};
process.stdin.pipe(myStream);
