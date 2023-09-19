// You will get a file as the first argument to your program
// (process.argv[2]).

// Use fs.createReadStream() to pipe the given file to process.stdout.

const fs = require('fs');

const filePath = process.argv[2];

fs.createReadStream(filePath).pipe(process.stdout);
