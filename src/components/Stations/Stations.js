import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";

class Stations extends Component {
 constructor() {
  super()
  this.state = {
   input: 'Zinkensdamm',
   checkedStations: []
  }
  this.searchStations = this.searchStations.bind(this);
  this.updateStations = this.updateStations.bind(this);
 }

 componentDidMount() {
  this.props.fetchStations();
 }

 searchStations() {
  this.props.searchStations(this.state.input);
 }

 updateStations() {
  this.props.updateStations(this.state.checkedStations);
 }

 deleteStation(stationID) {
  this.props.deleteStation(stationID);
 }


 checkStation(name, id, checked) {
  const checkedStations = this.state.checkedStations;

  const isInCheckStation = (toggledObject) => {
   for (var i = 0; i < checkedStations.length; i++) {
     if(checkedStations[i].id === toggledObject.id) {
      return i
     }
   }
   return false;
  };

  if(isInCheckStation({name, id}) === false) {
   checkedStations.push({name, id})
  } else {
   checkedStations.splice(isInCheckStation({name, id}), 1)
  }
  this.setState({checkedStations})
 }

 render() {
  const { stations: {searchResults, myStations, fetchingStations,searchingStations, stationsNotFetched, }} = this.props;
  const {checkedStations, input } = this.state;
  console.log(checkedStations," checkedStations");
  console.log(myStations," myStations");
  return (
   <section className={styles.stations}>
    <input type='text' value={input} onChange={(e) => this.setState({input: e.target.value})} placeholder="Sök station" className={styles.text_input}/>
    <button onClick={this.searchStations}>Sök stationer</button>
    {
     fetchingStations ? <p>Hämtar stationer</p> : null
    }
    {
     stationsNotFetched ? <p>Kunde inte hämta stationer</p> : null
    }
    {
      searchResults.map((searchResult, index) => {
       return <div key={index}>
                <input type="" type="checkbox" value={searchResult.SiteId} onChange={this.checkStation.bind(this, searchResult.Name, searchResult.SiteId)}/>
                {searchResult.Name}
               </div>
     })
    }
    {
     checkedStations.length > 0 ? <button onClick={this.updateStations}>Uppdatera stationer</button> : null
    }
    <div>
     <h4>Mina stationer</h4>
    {
     myStations.length > 0 ? myStations.map((station, index) => {
       return <div key={index} onClick={this.deleteStation.bind(this, station._id)}>{station.name}<button>RADERA STATION</button></div>
     }) : null
    }
    </div>





   </section>
  )
 }
}




export default Stations;
