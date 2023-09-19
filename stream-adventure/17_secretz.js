// An encrypted, gzipped tar file will be piped in on process.stdin. To beat
// this challenge, for each file in the tar input, print a hex-encoded md5
// hash of the file contents followed by a single space followed by the file
// path, then a newline.

// You will receive the cipher algorithm name as process.argv[2], the cipher
// key as process.argv[3] and the cipher initialization vector as
// process.argv[4]. You can pass these arguments directly through to
// crypto.createDecipheriv().

const crypto = require('crypto');
const tar = require('tar');
const concat = require('concat-stream');

const algorithm = process.argv[2];
const key = process.argv[3];
const iv = process.argv[4];

const parser = new tar.Parse();
parser.on('entry', (entry) => {
	if (entry.type !== 'File') {
		return entry.resume();
	}
	const hash = crypto.createHash('md5', { encoding: 'hex' });
	entry
		.pipe(hash)
		.pipe(concat((hash) => {
			console.log(`${hash} ${entry.path}`);
		}));
});

process.stdin
	.pipe(crypto.createDecipheriv(algorithm, key, iv))
	.pipe(parser);
