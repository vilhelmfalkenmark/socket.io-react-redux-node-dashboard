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
    myStations: action.payload.data,
    myStationIDs: action.payload.data.map((station) => station.id)
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

  const clearIds = stateInstance => stateInstance.filter(id => id !== action.payload.siteId);

  return Object.assign({}, state,{
    myStations: state.myStations.filter(station => station._id !== action.payload._id),
    myStationIDs: clearIds(state.myStationIDs),
    checkedStationsIds: clearIds(state.checkedStationsIds)
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
  return Object.assign({}, state, {
    myStations: action.payload.data,
    myStationIDs: action.payload.data.map((station) => station.id),
    checkedStations: []
  })
 }

 //////////////////////////////////////////
 // CHECK STATIONS IN BOX NON-ASYNC ACTION
 //////////////////////////////////////////
 else if(action.type === 'CHECK_STATION') {
  const checkedStations = state.checkedStations;
  let checkedStationsIds;
  const newStation = action.payload;
  const isInCheckStation = (toggledObject) => {
   for (var i = 0; i < checkedStations.length; i++) {
     if(checkedStations[i].id === toggledObject.id) {
      return i
     }
   }
   return false;
  };

  if(isInCheckStation(newStation) === false) {
   checkedStations.push(newStation)
   checkedStationsIds = state.checkedStationsIds.concat(newStation.id);
  } else {
   checkedStations.splice(isInCheckStation(newStation), 1)
   checkedStationsIds = state.checkedStationsIds.filter((id) => id !== newStation.id);
  }
  return Object.assign({}, state, {
    checkedStations: checkedStations,
    checkedStationsIds: checkedStationsIds
  })
 }

 return state;
}
