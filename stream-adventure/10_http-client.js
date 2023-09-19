// Send an HTTP POST request to (http://localhost:8099) and pipe
// process.stdin into it. Pipe the response stream to process.stdout.

const http = require('http');

process.stdin.pipe(
	http.request('http://localhost:8099', { method: 'POST' }, (response) => {
		response.pipe(process.stdout);
	})
);
