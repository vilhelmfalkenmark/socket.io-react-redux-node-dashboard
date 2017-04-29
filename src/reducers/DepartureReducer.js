import initialState from "../store/InitialState";

export default function departures(state = initialState.departures, action) {

 if(action.type === 'DEPARTURES_FETCHED') {
  return Object.assign({},state, {
   departuresData: action.payload.data,
   fetchingDepartures: false
  });
 }
 else if(action.type === 'DEPARTURES_NOT_FETCHED') {
  return action.payload;
 }

 return state;
}
