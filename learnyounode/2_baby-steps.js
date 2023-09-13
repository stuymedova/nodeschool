// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).

const sum = process.argv
	.slice(2)
	.reduce((acc, arg) => {
		return acc + Number(arg);
	}, 0);

console.log(sum);
