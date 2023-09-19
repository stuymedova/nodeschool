// In this challenge, write an http server that uses a through stream to
// write back the request stream as upper-cased response data for POST
// requests.

// Your http server should listen on the port given at process.argv[2].

const http = require('http');
const through2 = require('through2');

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
	if (req.method !== 'POST') {
		res.writeHead(404);
		res.end();
	}

	req
		.pipe(through2(function(chunk, encoding, callback) {
			this.push(chunk.toString().toUpperCase());
			callback();
		}))
		.pipe(res);
});
server.listen(port);
