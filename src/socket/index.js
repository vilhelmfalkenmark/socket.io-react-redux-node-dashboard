import * as actions from '../actions/TodoActions';
import io from 'socket.io-client';

var socket = null;

export function socketMiddleWare(store) {
  return next => action => {
    const result = next(action);

    if (socket && action.type === actions.TODO_ADDED) {
      let todos = store.getState().todos;
      socket.emit('todo',action.payload);
    }

    return result;
  };
}


export function startSocket(store) {
  // socket = io.connect(`${location.protocol}//${location.host}`);
  socket = io.connect(`http://localhost:5000`);

  socket.on('SOCKET_RESPONSE_TODO', data => {
    store.dispatch(actions.addResponse(data));
  });
}
