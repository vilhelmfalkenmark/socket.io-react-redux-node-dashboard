import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";
import DepartureStation from "./DepartureStation";
import StationsContainer from "../../containers/StationsContainer";


class Departures extends Component {
 constructor() {
  super()
  this.state = {
   intervalID: 0
  }
  // this.fetchStations = this.fetchStations.bind(this);
 }


 componentDidMount() {
  this.props.fetchDepartures();

  // NOTE Låt vara utkommenterat under utveckling
  // const id = window.setInterval( () => {
  //  this.props.fetchDepartures();
  //  }, 30000);
  //
  //  this.setState({
  //   intervalID: id
  //  })
 }

 componentWillUnmount() {
  // window.clearInterval(this.state.intervalID);
 }


 render() {
  const { departures: { departuresData, fetchingDepartures} } = this.props;

  return (
   <section className={styles.departures}>
    <h2>SL</h2>
    <StationsContainer />
    <div className={styles.departures_departures}>
     {
      !fetchingDepartures ? departuresData.map((departure, index) => {
        return <DepartureStation departure={departure} key={index} />
      }) : <p>Laddar avgångar!</p>
     }
    </div>
   </section>
  )
 }
}




export default Departures;
