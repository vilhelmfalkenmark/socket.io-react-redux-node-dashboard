import axios from 'axios';
import { fetchDepartures } from "./DepartureActions";

export function fetchStations() {
  return function(dispatch) {
    dispatch({type:'FETCHING_STATIONS'})
    axios.get(`http://localhost:5000/api/stations/mystations`)
    .then((response) => {
      dispatch({type: "STATIONS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "STATIONS_NOT_FETCHED", payload: err})
    })
  }
}


export function searchStations(stationQuery) {
  return function(dispatch) {
    dispatch({type:'SEARCHING_STATIONS'})
    axios.get(`http://localhost:5000/api/stations`, {
     params: {query: stationQuery}
    })
    .then((response) => {
      dispatch({type: "STATIONS_SEARCH_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "STATIONS_SEARCH_NOT_FETCHED", payload: err})
    })
  }
}

export function deleteStation(stationIDObject) {
  return function(dispatch) {
    axios.delete(`http://localhost:5000/api/stations/${stationIDObject._id}`)
    .then((response) => {
      dispatch({type: "STATION_DELETED", payload: stationIDObject})
      dispatch(fetchDepartures());

    })
    .catch((err) => {
      dispatch({type: "COULD_NOT_DELETE_STATION", payload: err})
    })
  }
}

export function checkStation(stationObject) {
  return function(dispatch) {
   dispatch({type: "CHECK_STATION", payload: stationObject})
  }
}

export function updateStations(stations) {
  return function(dispatch) {
    dispatch({type:'UPDATING_STATIONS'})
    axios.post("http://localhost:5000/api/stations", stations)
    .then((response) => {
      dispatch({type: "STATIONS_UPDATED", payload: response.data})
      dispatch(fetchDepartures());
    })
    .catch((err) => {
      dispatch({type: "STATIONS_NOT_UPDATED", payload: err})
    })
  }
}
