// Let's talk to two remote processes over HTTP being run by your friend
// and mine, "localhost".

// * Port 7001: Faux session cache (Redis or some such thing)
// * Port 7002: Faux database (MongoDB, LevelDB, Postgres, etc)

// Send an HTTP GET request to the session cache on port 7001. A string
// will be returned to you representing a user ID.

// Grab that ID from the session response and send an HTTP GET request to
// your database on port 7002 to the url `localhost:7002/<id>`.

// If successfully done, your database will return a user object.
// `console.log` it to win many nerd-points.

fetch('http://localhost:7001')
	.then((id) => {
		return fetch(`http://localhost:7002/${id}`);
	})
	.then((user) => {
		return user.json();
	})
	.then(console.log);
