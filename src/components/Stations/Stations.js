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
  // this.props.searchStations(this.state.input);
 }

 searchStations(event) {
  if(event.key === 'Enter' && event.target.value !== '') {
   this.setState({input: ''})
   this.props.searchStations(event.target.value);
  }
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
  return (
   <section className={styles.stations}>
    <input type='text' value={input} onKeyUp={this.searchStations} onChange={(e) => this.setState({input: e.target.value})} placeholder="Sök station" className={styles.text_input}/>
    {
     fetchingStations ? <p>Hämtar stationer</p> : null
    }
    {
     stationsNotFetched ? <p>Kunde inte hämta stationer</p> : null
    }
    <ul>
    {
     // Searchresults
      searchResults.map((searchResult, index) =>
        <li key={index} className={styles.stations_search_list}>
          <input type="checkbox"
                 className={styles.checkbox}
                 name={searchResult.Name}
                 value={searchResult.SiteId}
                 onChange={this.checkStation.bind(this, searchResult.Name, searchResult.SiteId)}
           />
           <label htmlFor={searchResult.Name} className={styles.checkbox_label}><span></span>{searchResult.Name}</label>
         </li>
     )
    }
    </ul>
    {
     checkedStations.length > 0 ? <button onClick={this.updateStations} className={styles.standard_btn_light}>Lägg till stationer</button> : null
    }
    <div>
     <h4>Mina stationer</h4>
     <ul>
      {
       myStations.length > 0 ? myStations.map((station, index) => {
         return <li key={index} className={styles.stations_mystations_list}>
                 <button className={styles.btn_round_red} onClick={this.deleteStation.bind(this, station._id)}></button>
                 <span>{station.name}</span>
                </li>
       }) : <h4>Jag har inte lagt till några stationer än :(</h4>
      }
    </ul>
    </div>

   </section>
  )
 }
}




export default Stations;
