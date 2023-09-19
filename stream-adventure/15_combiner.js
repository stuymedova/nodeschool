// Create a module in a new file, it should return a
// readable/writable stream using the stream-combiner module.

// Your stream will be written a newline-separated JSON list of science
// fiction genres and books. All the books after a "type":"genre" row belong
// in that genre until the next "type":"genre" comes along in the output.

//    {"type":"genre","name":"cyberpunk"}
//    {"type":"book","name":"Neuromancer"}
//    {"type":"book","name":"Snow Crash"}
//    {"type":"genre","name":"space opera"}
//    {"type":"book","name":"A Deepness in the Sky"}
//    {"type":"book","name":"Void"}

// Your program should generate a newline-separated list of JSON lines of
// genres, each with a "books" array containing all the books in that genre.
// The input above would yield the output:

//    {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
//    {"name":"space opera","books":["A Deepness in the Sky","Void"]}

// Your stream should take this list of JSON lines and gzip it with
// zlib.createGzip().

const combine = require('stream-combiner');
const split2 = require('split2');
const through2 = require('through2');
const zlib = require('zlib');

module.exports = function() {
	let collection = null;

	return combine(
		split2(),
		through2.obj(write, end),
		zlib.createGzip(),
	);

	function write(line, encoding, callback) {
		if (line.length === 0) {
			return callback();
		}

		const obj = JSON.parse(line);

		if (obj.type === 'genre') {
			if (collection !== null) {
				this.push(JSON.stringify(collection) + '\n');
			}
			collection = { name: obj.name, books: [] };
		}
		else if (obj.type === 'book') {
			collection.books.push(obj.name);
		}
		callback();
	}

	function end(done) {
		if (collection !== null) {
			this.push(JSON.stringify(collection) + '\n');
		}
		done();
	}
}
