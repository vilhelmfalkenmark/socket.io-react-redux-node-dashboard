var TodoModel = require('../models/TodoModel');

module.exports = function(io){
 io.on('connection', (socket) => {
 let connectedUsers = 0;
 socket.on(`CLIENT_REQUEST_UPDATE_CONNECTED_USERS`, (userCount) => {

        io.emit('SERVER_RESPONSE_CONNECTED_USERS_UPDATED', connectedUsers + userCount);
      });
  //////////////////////////////////////////
  // HÄMTA ALLA
  //////////////////////////////////////////
  socket.on(`CLIENT_REQUEST_ALL_TODOS`, () => {
     TodoModel.find((err, AllTodos) => {
         if (err) {
          res.send(err);
         } else {
          io.emit('SERVER_ALL_TODOS_FETCHED', AllTodos);
         }
     });
    });

  //////////////////////////////////////////
  // LÄGG TILL
  //////////////////////////////////////////
  socket.on(`CLIENT_REQUEST_ADD_TODO`, (todo) => {
    var newTodo = new TodoModel();      // create a new instance of the Bear model
    newTodo.task = todo.task; // set the bears name (comes from the request)
    newTodo.id = todo.id;
    newTodo.save((err) => {
        if (err) {
         io.emit('SERVER_RESPONSE_COULD_NOT_ADD_TODO', err);
        } else {
         io.emit('SERVER_RESPONSE_ADD_TODO', newTodo);
        }
      });
    });
    //////////////////////////////////////////
    // RADERA
    //////////////////////////////////////////
    socket.on(`CLIENT_REQUEST_DELETE_TODO`, (todoID) => {
      TodoModel.remove({ _id: todoID }, (err, bear) => {
            if (err) {
             io.emit('SERVER_RESPONSE_COULD_NOT_DELETE_TODO', err);
            } else {
             io.emit('SERVER_RESPONSE_TODO_DELETED', todoID);
            }
        });
      });
     //////////////////////////////////////////
     //////////////////////////////////////////
     // TWITTER STREAM
     //////////////////////////////////////////
     //////////////////////////////////////////






  socket.on('disconnect', () => {
    console.log('user disconnected');

  });
});
}
