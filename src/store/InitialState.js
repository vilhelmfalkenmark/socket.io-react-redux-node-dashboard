 const initialState = {
 todos: [],
 connectedUsers: 0,
 departures: {
  departuresData: [],
  fetchingDepartures: true
 },
 stations: {
  stationsData: [],
  fetchingStations: false,
  stationsNotFetched: false
 },
 today: {
  data: {},
  isFetching: true
 }
}

export default initialState;
