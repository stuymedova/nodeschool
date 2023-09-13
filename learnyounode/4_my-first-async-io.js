// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
	if (err) {
		throw err;
	}
	const linesCount = data.split('\n').length - 1;
	console.log(linesCount);
});
