const app = require('express')();
const http = require('http').Server(app);
const port = 5000;
const io   = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/grocery_list');






io.on('connection', (socket) => {
  console.log('a user connected');

  socket.broadcast.emit('hi');

  socket.on(`CLIENT_REQUEST_ADD_TODO`, (todo) => {
    // console.log(`En ny sak att göra: ${todo.task}`);
    io.emit('SERVER_RESPONSE_ADD_TODO', todo);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(port, () => {
  console.log(`Lyssnar på port ${port}`);
});
