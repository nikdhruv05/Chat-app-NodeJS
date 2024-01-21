const express = require('express');
const http = require('http');
const Socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = Socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    socket.on('msg_send', (data) => {
        console.log(data);
        io.emit('msg_rcvd', data);
        // socket.emit('msg_rcvd', data);
        // socket.broadcast.emit('msg_rcvd', data);
    })

});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log('Server started');
});