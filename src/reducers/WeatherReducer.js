import initialState from "../store/InitialState";

export default function weather(state = initialState.weather, action) {

 if (action.type === 'FETCHING_WEATHER') {
  return Object.assign({},state,{
   fetchingWeather: true
  })
 }
 else if(action.type === 'WEATHER_FETCHED') {
  return Object.assign({},state, {
   data: action.payload.data,
   fetchingWeather: false
  })
 }
 else if(action.type === 'WEATHER_NOT_FETCHED') {
  return Object.assign({},state,{
   data: action.payload,
   fetchingWeather: false
  })
 }

 return state;
}
