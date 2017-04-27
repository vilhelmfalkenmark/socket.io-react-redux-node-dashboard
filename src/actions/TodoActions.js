import axios from 'axios';
export const TODO_ADDED = 'TODO_ADDED';
export const TODO_DELETED = 'TODO_DELETED';

export function addTodo(todoObject) { // <-- Non ASYNC ACTION
 return {type: 'TODO_ADDED', payload: todoObject }
}



export function addResponse(todoObject) { // <-- Non ASYNC ACTION
 return {type: 'SOCKET_RESPONSE_TODO', payload: todoObject }
}
