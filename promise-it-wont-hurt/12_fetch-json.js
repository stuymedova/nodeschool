// Fetch JSON from http://localhost:1337 and console.log it.

fetch('http://localhost:1337')
	.then((value) => {
		return value.json();
	})
	.then(console.log);
