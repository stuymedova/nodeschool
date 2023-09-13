// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

// APPROACH 1
// const http = require('http');

// const urls = process.argv.slice(2);

// http.get(urls[0], (response) => {
// 	response.pipe(bl((err, data) => {
// 		if (err) {
// 			throw err;
// 		}
// 		data = data.toString();
// 		console.log(data);

// 		http.get(urls[1], (response) => {
// 			response.pipe(bl((err, data) => {
// 				if (err) {
// 					throw err;
// 				}
// 				data = data.toString();
// 				console.log(data);

// 				http.get(urls[2], (response) => {
// 					response.pipe(bl((err, data) => {
// 						if (err) {
// 							throw err;
// 						}
// 						data = data.toString();
// 						console.log(data);
// 					}));
// 				});
// 			}));
// 		});
// 	}));
// });

// APPROACH 2
const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
httpGetAll(urls);

function httpGetAll(urls) {
	const responses = new Array(urls.length);
	let responseCount = 0;

	urls.forEach((url, i) => {
		http.get(url, function (response) {
			response.pipe(bl(function (err, data) {
				if (err) {
					return console.error(err)
				}

				responses[i] = data.toString();
				responseCount += 1;

				if (responseCount === 3) {
					printAll(responses);
				}
			}));
		});
	});
}

function printAll(givenArray) {
	givenArray.forEach((el) => console.log(el));
}
