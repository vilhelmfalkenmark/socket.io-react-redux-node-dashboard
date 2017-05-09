import React, { Component } from "react";
import styles from "../../styles/css/stylesheet.css";

const WeatherTime = ({ weather: { temperature, windDirection, windSpeed, weatherText, timeObject} }) => {
  return (
    <li className={styles.weather_weather_time}>
      <h4>{`${timeObject.day} ${timeObject.date} ${timeObject.month}`} Kl {timeObject.hour}</h4>
      <p>Temp: {temperature} ˚C</p>
      <p className={styles.wind_info}><span>Vind: {windSpeed} m/s</span> <span className={styles.wind_direction}></span></p>
    </li>
  )
 }
export default WeatherTime;
