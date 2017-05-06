import React, { Component } from "react";
import styles from "../../styles/css/stylesheet.css";

const WeatherTime = ({ weather: { temperature, windDirection, windSpeed, weatherText, timeObject} }) => {
  return (
    <li className={styles.weather_weather_time}>
      <h4>{`${timeObject.day} ${timeObject.date} ${timeObject.month}`} Kl {timeObject.hour}</h4>
      <p>Temp: {temperature} ˚C</p>
      <p>Vind: {windSpeed} m/s</p>
    </li>
  )
 }
export default WeatherTime;
