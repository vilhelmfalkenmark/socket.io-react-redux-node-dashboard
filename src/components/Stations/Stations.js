import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";

class Stations extends Component {
 constructor() {
  super()
  this.state = {
   input: 'Rosenlundsgatan',
   checkedStations: []
  }
  this.fetchStations = this.fetchStations.bind(this);
  this.updateStations = this.updateStations.bind(this);
 }

 componentDidMount() {
  this.props.fetchStations(this.state.input);
 }

 fetchStations() {
  this.props.fetchStations(this.state.input);
 }

 updateStations() {
  this.props.updateStations(this.state.checkedStations);
 }


 checkStation(StationID, StationName,checked) {
  const checkedStations = this.state.checkedStations;

  const isInCheckStation = (toggledObject) => {
   for (var i = 0; i < checkedStations.length; i++) {
     if(checkedStations[i].StationID === toggledObject.StationID) {
      return i
     }
   }
   return false;
  };

  if(isInCheckStation({StationID, StationName}) === false) {
   checkedStations.push({StationID, StationName})
  } else {
   checkedStations.splice(isInCheckStation({StationID, StationName}), 1)
  }

  this.setState({checkedStations})
 }

 render() {
  const { stations: {stationsData, fetchingStations, stationsNotFetched}} = this.props;
  const {checkedStations, input } = this.state;
  console.log(checkedStations);
  return (
   <section className={styles.stations}>
    <input type='text' value={input} onChange={(e) => this.setState({input: e.target.value})} placeholder="Sök station" className={styles.text_input}/>
    <button onClick={this.fetchStations}>Sök stationer</button>
    {
     fetchingStations ? <p>Hämtar stationer</p> : null
    }
    {
     stationsNotFetched ? <p>Kunde inte hämta stationer</p> : null
    }
    {
      stationsData.map((station, index) => {
       return <div key={index}><input type="" type="checkbox" value={stationsData.SiteId} onChange={this.checkStation.bind(this,station.SiteId, station.Name)}/>{station.Name}</div>
     })
    }
    {
     checkedStations.length > 0 ? <button onClick={this.updateStations}>Uppdatera stationer</button> : null
    }
   </section>
  )
 }
}




export default Stations;
