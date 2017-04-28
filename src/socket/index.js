import * as TodoAction from '../actions/TodoActions';
import * as UserAction from '../actions/UserActions';
import io from 'socket.io-client';

var socket = null;


export function socketMiddleWare(store) {
  return next => action => {
    const result = next(action);

    // Todos
    if (socket && action.type === TodoAction.FETCH_TODOS) {
      socket.emit(`CLIENT_REQUEST_ALL_TODOS`);
    }

    else if (socket && action.type === TodoAction.ADD_TODO) {
      socket.emit(`CLIENT_REQUEST_ADD_TODO`,action.payload);
    }

    else if (socket && action.type === TodoAction.DELETE_TODO) {
      socket.emit(`CLIENT_REQUEST_DELETE_TODO`, action.payload);
    }

    // Users
    else if (socket && action.type === UserAction.UPDATE_USERCOUNT) {
      socket.emit(`CLIENT_REQUEST_UPDATE_CONNECTED_USERS`, action.payload);
    }

    return result;
  };
}


export function startSocket(store) {
  socket = io.connect(`http://localhost:5000`);

  // Todos
  socket.on(`SERVER_RESPONSE_ADD_TODO`, data => {
    store.dispatch(TodoAction.addResponse(data));
  });

  socket.on(`SERVER_ALL_TODOS_FETCHED`, data => {
    store.dispatch(TodoAction.fetchResponse(data));
  });

  socket.on(`SERVER_RESPONSE_TODO_DELETED`, data => {
    store.dispatch(TodoAction.deleteResponse(data));
  });

  // Users
  socket.on(`SERVER_RESPONSE_CONNECTED_USERS_UPDATED`, data => {
    store.dispatch(UserAction.updateResponse(data));
  });



}
