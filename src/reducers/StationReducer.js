import initialState from "../store/InitialState";

export default function stations(state = initialState.stations, action) {

 if(action.type === 'FETCHING_STATIONS') {
  return Object.assign({},state,{
    fetchingStations: true
  })
 }

 else if(action.type === 'STATIONS_FETCHED') {
  return Object.assign({},state,{
    fetchingStations: false,
    stationsData: action.payload.data
  })
 }

 else if(action.type === 'STATIONS_NOT_FETCHED') {
  return Object.assign({},state,{
   fetchingStations: false,
   stationsNotFetched: true
  })
 }

 return state;
}
