import initialState from "../store/InitialState";

export default function todos(state = initialState.todos, action) {

 if(action.type === 'SERVER_RESPONSE_TODOS_FETCHED') {
  return action.payload;
 }

 else if(action.type === 'SERVER_RESPONSE_ADD_TODO') {
  return state.concat(action.payload);
 }

 else if(action.type === 'SERVER_RESPONSE_TODO_DELETED') {
  return state.filter((todo) => todo._id !== action.payload);
 }

 return state;
}
