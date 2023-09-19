// You will be given text on process.stdin, convert buffer to string and
// reverse it using the concat-stream module before writing it to
// process.stdout.

const concat = require('concat-stream');

process.stdin.pipe(concat(function(data) {
	const reversedString = data.toString().split('').reverse().join('');
	process.stdout.write(reversedString);
}));
