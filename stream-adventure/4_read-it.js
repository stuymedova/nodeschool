// Implement a Readable stream, initiate a new stream instance from your
// implementation and pipe to process.stdout. You will receive the content to
// add to your stream as the first argument to your program
// (process.argv[2]).

const { Readable } = require('stream');

const content = process.argv[2];

const myStream = new Readable();
myStream._read = () => {};
myStream.push(content);
myStream.pipe(process.stdout);
