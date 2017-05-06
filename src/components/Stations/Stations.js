import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";

class Stations extends Component {
 constructor() {
  super()
  this.state = {
   input: ''
  }
  this.searchStations = this.searchStations.bind(this);
  this.updateStations = this.updateStations.bind(this);
 }

 componentDidMount() {
  this.props.fetchStations();
 }

 searchStations(event) {
  if(event.key === 'Enter' && event.target.value !== '') {
   this.setState({input: ''})
   this.props.searchStations(event.target.value);
  }
 }

 updateStations() {
  this.props.updateStations(this.props.stations.checkedStations);
 }

 deleteStation(stationIDObject) {
  this.props.deleteStation(stationIDObject);
 }

 checkStation(name, id, checked) {
  this.props.checkStation({name,id})
 }

 render() {
  const {
   stations: {
   searchResults,
   myStations,
   myStationIDs,
   fetchingStations,
   searchingStations,
   stationsNotFetched,
   checkedStations,
   checkedStationsIds,
   }} = this.props;

  const { input } = this.state;

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
                 className={`${styles.checkbox} ${myStationIDs.indexOf(searchResult.SiteId) > -1 ? styles.is_selected : styles.not_selected}`}
                 name={searchResult.Name}
                 value={searchResult.SiteId}
                 checked={checkedStationsIds.indexOf(searchResult.SiteId) > -1}
                 onChange={myStationIDs.indexOf(searchResult.SiteId) === -1 ? this.checkStation.bind(this, searchResult.Name, searchResult.SiteId) : null}
           />
           <label htmlFor={searchResult.Name} className={styles.checkbox_label}><span></span>{searchResult.Name} - {searchResult.SiteId}</label>
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
                 <button className={styles.btn_round_red} onClick={this.deleteStation.bind(this, {_id: station._id, siteId: station.id})}></button>
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
