import React, { Component } from "react";
import styles from "../../styles/css/stylesheet.css";
// import {Collapse} from 'react-collapse';

class DepartureTransportation extends Component {
constructor() {
 super();
 this.state = {
  open: false,
  opened: false
 }
 this.toggleTransportation = this.toggleTransportation.bind(this);
}

toggleTransportation() {
 this.setState({
  open: !this.state.open,
  opened: true
 })
}

render() {
 const {transportationType, transportations} = this.props;
 const {open, opened} = this.state;
 return(
  <div>
     <div className={styles.departure_transportation_header}>
      <button onClick={this.toggleTransportation} className={!open ? styles.btn_round_green : styles.btn_round_red}></button>
       <h4>{transportationType}. {transportations.length} Avgångar</h4>
      </div>
      <div className={open ? styles.is_open : styles.is_closed}>
      {
       opened ? transportations.map( (transportation, index) =>
        <p className={styles.departures_departures_col_row} key={index}>
         <span>Linje {transportation.LineNumber} mot {transportation.Destination}.</span>
         <span>Om: {transportation.DisplayTime}</span>
        </p>
       ) : null
      }
     </div>
  </div>
 )
}



}


export default DepartureTransportation;
