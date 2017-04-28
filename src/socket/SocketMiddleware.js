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
