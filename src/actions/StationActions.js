import axios from 'axios';

export function fetchStations(stationQuery) {
  return function(dispatch) {
    dispatch({type:'FETCHING_STATIONS'})
    axios.get(`http://localhost:5000/api/stations`, {
     params: {query: stationQuery}
    })
    .then((response) => {
      dispatch({type: "STATIONS_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "STATIONS_NOT_FETCHED", payload: err})
    })
  }
}


export function updateStations(stations) {
  return function(dispatch) {
    dispatch({type:'UPDATING_STATIONS'})
    axios.post("http://localhost:5000/api/stations", stations)
    .then((response) => {
      dispatch({type: "STATIONS_UPDATED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "STATIONS_NOT_UPDATED", payload: err})
    })
  }
}

// Add new bear
// export function addNewBear(newBear) {
//  console.log(newBear);
//   return function(dispatch) {
//     axios.post("http://localhost:5000/api/bears", newBear)
//     .then((response) => {
//       console.log(response, " är response från addNewBear action");
//       dispatch({type: "NEW_BEAR_ADDED", payload: response.data.newBear})
//     })
//     .catch((err) => {
//       dispatch({type: "COULD_NOT_ADD_BEAR", payload: err})
//     })
//   }
// }
