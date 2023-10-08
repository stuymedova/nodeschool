// This task will allow you to demonstrate an understanding how to chain promises
// together using then.

// Two functions will be provided as global functions that you can use: first
// and second.

// Call the first function in your program. first() will return a promise that
// will be fulfilled with a secret value.

// Call the second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.

first()
	.then(second)
	.then(console.log);
