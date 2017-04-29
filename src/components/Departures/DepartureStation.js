import React, { Component } from "react";
import DepartureTransportation from "./DepartureTransportation";
import styles from "../../styles/css/stylesheet.css";

class DepartureStation extends Component {
 constructor() {
  super()

 }

 render() {
  const { StopAreaName, Buses, Metros, Trains, Ships, Trams } = this.props.departure;
  return (
   <div className={styles.departures_departures_col}>
     <h2 className={styles.departures_departures_header}>{StopAreaName}</h2>
      <div>
       {
        Buses.length > 0 ? <DepartureTransportation transportationType={'Bussar'} transportations={Buses}/> : null
       }
       {
        Metros.length > 0 ? <DepartureTransportation transportationType={'Tunnelbana'} transportations={Metros}/> : null
       }
       {
        Trains.length > 0 ? <DepartureTransportation transportationType={'Pendeltåg'} transportations={Trains}/> : null
       }
       {
        Ships.length > 0 ? <DepartureTransportation transportationType={'Båtar'} transportations={Ships}/> : null
       }
       {
        Trams.length > 0 ? <DepartureTransportation transportationType={'Lokalbana'} transportations={Trams}/> : null
       }
      </div>
   </div>
  )
 }
}




export default DepartureStation;
