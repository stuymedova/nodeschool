// Write a program that exports a function that spawns a process from a cmd
// string and an args array and returns a single duplex stream joining
// together the stdin and stdout of the spawned process.

// const { spawn } = require('child_process')

// module.exports = function (cmd, args) {
//   // spawn the process and return a single stream
//   // joining together the stdin and stdout here
// }

const { spawn } = require('child_process');
const duplexer2 = require('duplexer2');

module.exports = function (cmd, args) {
	const ps = spawn(cmd, args);
	return duplexer2(ps.stdin, ps.stdout);
};
