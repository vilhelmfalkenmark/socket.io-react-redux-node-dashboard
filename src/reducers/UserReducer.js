import initialState from "../store/InitialState";

export default function users(state = initialState.connectedUsers, action) {

  if (action.type === 'SERVER_RESPONSE_CONNECTED_USERS_UPDATED') {
  return action.payload;
 }




 return state;
}
