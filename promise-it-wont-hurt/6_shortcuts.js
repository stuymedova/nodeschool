// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject ☺

// 1
const promise1 = new Promise((resolve, reject) => {
	throw new Error('Unhandled rejection');
}).catch((error) => {
	console.log(error.message);
});

// 2
const promise2 = Promise.resolve('Resolved promise')
	.then(console.log);

// 3
const promise3 = Promise.reject('Rejected promise')
	.then(null, console.log);
