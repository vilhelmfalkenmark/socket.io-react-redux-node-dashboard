import React, { Component } from "react";
import styles from "../../styles/css/stylesheet.css";

class Today extends Component {
 constructor() {
  super()
  this.state = {
   intervalID: 0,
   hour: null,
   minute: null
  }
  this.updateClock = this.updateClock.bind(this);
 }

 componentDidMount() {
  this.props.fetchToday();

  // NOTE Låt vara utkommenterat under utveckling
  // const id = window.setInterval( () => {
  //  this.updateClock();
  //   }, 1000);
  //  this.setState({
  //   intervalID: id
  //  })
 }

 componentWillUnmount() {
  window.clearInterval(this.state.intervalID);
 }

updateClock() {
let now = new Date();
 this.setState({
  hour: now.getHours(),
  minute: now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
 })
}

 render() {
  const {week,day, monthName, names, weekDay,year} = this.props.today;
  const {hour, minute } = this.state;
  return(
    <section className={styles.todayContainer}>
     
     {/* <h4 className={styles.clock}>{hour ? `${hour}:${minute}`: null}</h4> */}
      <div className={styles.dateBox}>
        <div className={styles.day}>
         <h4>{day}</h4>
        </div>
        <div className={styles.monthAndYear}>
          <div>
           <h5>{monthName}</h5>
           <h5>{weekDay}</h5>
          </div>
        </div>
      </div>


      <div className={styles.weekDay}>
        <div>
         <h5>Vecka {week}</h5>
          <p>Namnsdag idag:
          {
           names ? names.map((name, index) => <span key={index}> {name} </span>) : null
          }
          </p>
         </div>
      </div>


    </section>
  )
 }
}
export default Today;
