export const ADD_TODO = 'ADD_TODO';


export function addTodo(todoObject) {
 return {type: ADD_TODO, payload: todoObject }
}



export function addResponse(todoObject) {
 return {type: 'SERVER_RESPONSE_ADD_TODO', payload: todoObject }
}
