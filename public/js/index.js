var socket = io();
socket.on('connect', function() {
	console.log('connected to server');
});
socket.on('disconnect', function() {
	console.log('disconnected from server');
});

socket.on('newMessage', function(message){
	console.log('new message:', message);
	var li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`)

	jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
// 	from: 'Jon',
// 	text: 'hello all mates'
// }, function(data) {
// 	console.log('got it', data);
// });

jQuery('#message-form button').on('click', function(e) {
	e.preventDefault()

	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
	}, function () {

	});
});