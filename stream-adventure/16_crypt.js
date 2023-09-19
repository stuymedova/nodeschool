// Your program will be given a passphrase on process.argv[2], an
// initialization value on process.argv[3] and 'aes256' encrypted data will
// be written to stdin.

// Simply decrypt the data and stream the result to process.stdout.

// You can use the crypto.createDecipheriv() api from node core to solve this
// challenge.

const crypto = require('crypto');

const key = process.argv[2];
const iv = process.argv[3];

process.stdin
	.pipe(crypto.createDecipheriv('aes256', key, iv))
	.pipe(process.stdout);
