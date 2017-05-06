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
  myStationIDs: [],
  checkedStations: [],
  checkedStationsIds: [],
  fetchingStations: false,
  searchingStations: false,
  stationsNotFetched: false
 },
 today: {
  data: {},
  isFetching: true
 },
 weather: {
  fetchingWeather: false,
  data: []
 }
}

export default initialState;
