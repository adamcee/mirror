// node deps
const http = require('http');
const path = require('path');

// npm deps
const { Server } = require("socket.io");
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

console.log('server says hello, world!');

const SERVER_MSG='server-msg';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('client connected');
    socket.emit(SERVER_MSG, "Hello, this is your server speaking!");
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
