import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";
import DepartureStation from "./DepartureStation";

class Departures extends Component {
 constructor() {
  super()

 }
 componentDidMount() {
  this.props.fetchDepartures();
 }


 render() {
  const { data, isFetching } = this.props.departures;
  return (
   <section className={styles.departures}>
    <h2>SL</h2>
    {
     // isFetching ? <p>Laddar avgångar!</p> : null
    }
    <div className={styles.departures_departures}>
     {
      !isFetching ? data.map((departure, index) => {
        return <DepartureStation departure={departure} key={index} />
      }) : <p>Laddar avgångar!</p>
     }
    </div>
   </section>
  )
 }
}




export default Departures;
