import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";
import DepartureStation from "./DepartureStation";
import StationsContainer from "../../containers/StationsContainer";


class Departures extends Component {
 constructor() {
  super()
  this.state = {
   intervalID: 0,
   stationsOpen: false
  }
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
  const { stationsOpen } = this.state;

  return (
   <section className={styles.departures}>
    <div className={styles.departures_header}>
     <h2>SL</h2>
     <div className={styles.departure_handle_stations}>
      <span>Hantera stationer</span>
     <button
      className={stationsOpen ? styles.btn_round_red : styles.btn_round_green}
      onClick={() => this.setState({stationsOpen: !stationsOpen})}>
      </button>
      </div>
    </div>
    <div className={stationsOpen ? styles.is_open : styles.is_closed}>
     <StationsContainer />
    </div>
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
