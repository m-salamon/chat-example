(function () {
    'use strict';

    const socket = io(); // io.connect('localhost:80')

    // listen for 'message' events from server
    const messagesDiv = $('#messages');
    socket.on('message', msg => {
        console.log(msg);
        messagesDiv.append('');
        messagesDiv.append('<span>' + msg + '</span><br/>');
    });

    socket.on('connectMessage', data => {
        console.log(data);
        messagesDiv.append('<span>' + data.thanks + ' ' + data.chatters.join(' ') + '</span><br/>');
    });

    socket.on('newChatter', data => {
        console.log(data);
        messagesDiv.append('<span>' + 'Your friend ~ ' + data + ' ~ has joined the chat </span><br/>');
    });

    socket.on('disconnectMessage', data => {
        console.log(data);
        messagesDiv.append('<span>' + 'Your friend ~ ' + data + ' ~ has left the chat </span><br/>');
    });

    // send a 'message' event to server
    // socket.emit('message', { msg: 'Hello Socket IO' });

    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });

    const nameInput = $('#name');
    $('#loginForm').submit(e => {
        e.preventDefault();
        socket.emit('name', nameInput.val());
        //messageInput.val('');
        $('#loginForm').hide();
        $('#chatPage').show();
    });

}());