import axios from 'axios';

export function fetchDepartures() {
  return function(dispatch) {
    axios.get(`http://localhost:5000/api/departures`)
    .then((response) => {
      dispatch({type: "DEPARTURES_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "DEPARTURES_NOT_FETCHED", payload: err})
    })
  }
}
