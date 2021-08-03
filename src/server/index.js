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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
