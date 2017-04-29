import initialState from "../store/InitialState";

export default function today(state = initialState.today, action) {

 if(action.type === 'TODAY_FETCHED') {
  return Object.assign({}, state, {
   data: action.payload.data, 
   isFetching: false
  });
 }

 else if(action.type === 'TODAY_NOT_FETCHED') {
  return action.payload;
 }

 return state;
}
