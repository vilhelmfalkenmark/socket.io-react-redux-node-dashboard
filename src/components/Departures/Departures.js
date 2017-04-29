import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";

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
   <section className={styles.transportation}>
    <h2>SL</h2>
    {
     isFetching ? <p>Laddar avgångar!</p> : null
    }

   </section>
  )
 }
}




export default Departures;
