import React, { Component } from "react";
import styles from "../../styles/css/stylesheet.css";
import WeatherTime from "./WeatherTime";

class Weather extends Component {
 constructor() {
  super()

 }

 componentDidMount() {
  this.props.fetchWeather();
 }


 render() {
   const { data, fetchingWeather } = this.props.weather;
  return(
    <section className={styles.weather}>
     <h4>Vädret i Stockholm</h4>
     {
      fetchingWeather ? <p> Laddar väder </p> : null
     }
     <ul className={styles.weather_weather_times}>
     {
      (!fetchingWeather && data.length > 0) ? data.map((weatherTime, index) =>
      <WeatherTime key={index} weather={weatherTime}/>
      ) : null
     }
     </ul>
    </section>
  )
 }
}
export default Weather;
