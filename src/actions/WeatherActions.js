import axios from 'axios';
// opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/n.n/lat/m.m/data.json
export function fetchWeather() {
  return function(dispatch) {
    dispatch({type: "FETCHING_WEATHER"})
    axios.get(`http://localhost:5000/api/weather`)
    .then((response) => {
      dispatch({type: "WEATHER_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "WEATHER_NOT_FETCHED", payload: err})
    })
  }
}
