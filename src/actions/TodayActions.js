import axios from 'axios';

const dateURL = () => {
 const today = new Date();
 return `${today.getYear() + 1900}/${today.getMonth() + 1}/${today.getDate()}`;
}

export function fetchToday() {
  return function(dispatch) {
    axios.get(`http://localhost:5000/api/today`)
    // axios.get(`http://api.dryg.net/dagar/v2.1/${dateURL()}`)
    .then((response) => {
      dispatch({type: "TODAY_FETCHED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "TODAY_NOT_FETCHED", payload: err})
    })
  }
}
