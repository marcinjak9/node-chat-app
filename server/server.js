const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var {generateMessage} = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined'));

	socket.on('createMessage', (message) => {
		console.log('create message', message);

		io.emit('newMessage', generateMessage(message.from, message.text));
	});

	socket.on('disconnect', () => {
	 console.log('User was disconnected');
	});
});



server.listen(port, () => {
	console.log(`Server started on ${port} port`);
});