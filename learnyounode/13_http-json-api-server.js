// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.

// For example:

// /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second'
// properties. For example:

// {
// 	 "hour": 14,
// 	 "minute": 23,
// 	 "second": 15
// }

// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time in milliseconds (the number of
// milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
// For example:

// { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to
// your program.

const http = require('http');

const port = Number(process.argv[2]);

const server = http.createServer((request, response) => {
	const url = new URL(request.url, `http://localhost:${port}`);
	const date = new Date(url.searchParams.get('iso'));

	const derivedTime = (() => {
		if (url.pathname === '/api/parsetime') {
			return parseTime(date);
		}
		if (url.pathname === '/api/unixtime') {
			return parseToUnixTime(date);
		}
	})();

	if (derivedTime) {
		response.writeHead(200, {
			'Content-Type': 'application/json',
		});
		return response.end(JSON.stringify(derivedTime));
	}

	response.writeHead(404);
	response.end();
});
server.listen(port);

function parseTime(dateObj) {
	return {
		hour: dateObj.getHours(),
		minute: dateObj.getMinutes(),
		second: dateObj.getSeconds(),
	};
}

function parseToUnixTime(dateObj) {
	return {
		unixtime: dateObj.getTime(),
	};
}
