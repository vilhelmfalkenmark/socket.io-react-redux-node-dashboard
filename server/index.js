const app = require('express')();
const http = require('http').Server(app);
const port = 5000;
const io   = require('socket.io')(http);
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');



io.on('connection', function(socket){
  console.log('a user connected');

  socket.broadcast.emit('hi');

  socket.on('todo', function(todo){
    console.log(`En ny sak att göra: ${todo.task}`);
    io.emit('SOCKET_RESPONSE_TODO', todo);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function(){
  console.log(`Lyssnar på port ${port}`);
});
