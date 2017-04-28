export const UPDATE_USERCOUNT = 'UPDATE_USERCOUNT';

//////////////////////////////////////////
// HÄMTA ALLA
//////////////////////////////////////////
export function updateConnectedUsers(count) {
 return {type: UPDATE_USERCOUNT, payload: count }
}

export function updateResponse(count) {
 return {type: 'SERVER_RESPONSE_CONNECTED_USERS_UPDATED', payload: count }
}
