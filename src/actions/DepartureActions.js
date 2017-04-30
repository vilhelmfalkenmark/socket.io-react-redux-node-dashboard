import axios from 'axios';

export function fetchDepartures() {
 console.log("fetchDepartures kallad på!");
  return function(dispatch) {
    axios.get(`http://localhost:5000/api/departures`)
    .then((response) => {
      console.log("Och kommer in här också!");
      dispatch({type: "DEPARTURES_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "DEPARTURES_NOT_FETCHED", payload: err})
    })
  }
}
