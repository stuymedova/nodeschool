// In this example, you will be given a readable stream, counter, as the
// first argument to your exported function:

// module.exports = function (counter) {
// 	// return a duplex stream to count countries on the writable side
// 	// and pass through `counter` on the readable side
// }

// Return a duplex stream with the counter as the readable side. You will be
// written objects with a 2-character country field as input, such as these:

// {"short":"OH","name":"Ohio","country":"US"}
// {"name":"West Lothian","country":"GB","region":"Scotland"}
// {"short":"NSW","name":"New South Wales","country":"AU"}

// Create an object to track the number of occurrences of each unique country
// code.

// For example:

// {"US": 2, "GB": 3, "CN": 1}

// Once the input ends, call counter.setCounts() with your counts object.

const duplexer2 = require('duplexer2');
const through2 = require('through2');

module.exports = function (counter) {
	const countryCount = {};
	const duplexStream = through2.obj(write, end);

	return duplexer2({ objectMode: true }, duplexStream, counter);

	function write(countryObj, encoding, callback) {
		if (!(countryObj.country in countryCount)) {
			countryCount[countryObj.country] = 0;
		}
		countryCount[countryObj.country] += 1;
		callback();
	}

	function end(done) {
		counter.setCounts(countryCount);
		done();
	}
};
