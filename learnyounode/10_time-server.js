const net = require('net');

const port = Number(process.argv[2]);
const server = net.createServer((socket) => {
	socket.end(getDateTimeNow() + '\n');
});
server.listen(port);

function getDateTimeNow() {
	const date = new Date();
	const dateString =
		zeroPad(date.getFullYear(), 4) + '-' +
		zeroPad(date.getMonth() + 1, 2) + '-' +
		zeroPad(date.getDate(), 2);
	const timeString =
		zeroPad(date.getHours(), 2) + ':' +
		zeroPad(date.getMinutes(), 2);
	return `${dateString} ${timeString}`;
}

function zeroPad(number, charCount) {
	return number.toString().padStart(charCount, '0');
}
