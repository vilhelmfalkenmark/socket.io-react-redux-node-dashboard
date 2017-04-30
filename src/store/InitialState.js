 const initialState = {
 todos: [],
 connectedUsers: 0,
 departures: {
  departuresData: [],
  fetchingDepartures: true
 },
 stations: {
  searchResults: [],
  myStations: [],
  fetchingStations: false,
  searchingStations: false,
  stationsNotFetched: false
 },
 today: {
  data: {},
  isFetching: true
 }
}

export default initialState;
