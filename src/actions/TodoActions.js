export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const DELETE_TODO = 'DELETE_TODOS';

//////////////////////////////////////////
// HÄMTA ALLA
//////////////////////////////////////////
export function fetchTodos() {
 return {type: FETCH_TODOS }
}

export function fetchResponse(allTodos) {
 return {type: 'SERVER_RESPONSE_TODOS_FETCHED', payload: allTodos }
}

//////////////////////////////////////////
// LÄGG TILL
//////////////////////////////////////////
export function addTodo(todoObject) {
 return {type: ADD_TODO, payload: todoObject }
}

export function addResponse(todoObject) {
 return {type: 'SERVER_RESPONSE_ADD_TODO', payload: todoObject }
}

//////////////////////////////////////////
// RADERA
//////////////////////////////////////////
export function deleteTodo(todoID) {
 return {type: DELETE_TODO, payload: todoID }
}

export function deleteResponse(todoID) {
 return {type: 'SERVER_RESPONSE_TODO_DELETED', payload: todoID }
}
