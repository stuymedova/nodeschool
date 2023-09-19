// In this adventure, write a websocket client that uses the ws module,
// generate a stream on top of the websocket client, write the string
// "hello\n" to the stream and pipe it to process.stdout.

// Open a stream with ws on localhost:8099.

const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8099');
const duplexStream = WebSocket.createWebSocketStream(ws, {
	encoding: 'utf-8',
});
duplexStream.write('hello\n');
duplexStream.pipe(process.stdout);
