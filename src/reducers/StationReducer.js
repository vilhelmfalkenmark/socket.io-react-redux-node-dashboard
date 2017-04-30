import initialState from "../store/InitialState";

export default function stations(state = initialState.stations, action) {
 //////////////////////////////////////////
 // INITIAL FETCH
 //////////////////////////////////////////
 if(action.type === 'FETCHING_STATIONS') {
  return Object.assign({},state,{
    fetchingStations: true
  })
 }

 else if(action.type === 'STATIONS_FETCHED') {
  return Object.assign({},state,{
    fetchingStations: false,
    myStations: action.payload.data
  })
 }

 else if(action.type === 'STATIONS_NOT_FETCHED') {
  return Object.assign({},state,{
   fetchingStations: false,
   stationsNotFetched: true
  })
 }
 //////////////////////////////////////////
 // SEARCHING
 //////////////////////////////////////////
 else if(action.type === 'SEARCHING_STATIONS') {
  return Object.assign({},state,{
    searchingStations: true
  })
 }

 else if(action.type === 'STATIONS_SEARCH_FETCHED') {
  return Object.assign({},state,{
    searchingStations: false,
    searchResults: action.payload.data
  })
 }

 else if(action.type === 'STATIONS_SEARCH_NOT_FETCHED') {
  return Object.assign({},state,{
   searchingStations: false,
   stationsNotFetched: true
  })
 }
 //////////////////////////////////////////
 // DELETE STATION
 //////////////////////////////////////////
 else if(action.type === 'STATION_DELETED') {
  return Object.assign({}, state,{
    myStations: state.myStations.filter((station) => station._id !== action.payload)
  })
 }

 else if(action.type === 'COULD_NOT_DELETE_STATION') {
  return Object.assign({},state,{
    searchingStations: false,
    searchResults: action.payload.data
  })
 }
 //////////////////////////////////////////
 // UPDATING/ADDING NEW STATIONS
 //////////////////////////////////////////
 else if(action.type === 'STATIONS_UPDATED') {
  return Object.assign({}, state,{
    myStations: state.myStations.concat(action.payload.data)
  })
 }



 return state;
}
