import React, { Component } from "react";
import styles from "../../styles/css/stylesheet.css";

class Today extends Component {
 componentDidMount() {
  this.props.fetchToday()
 }
 render() {
  const {week,day, monthName, names, weekDay,year} = this.props.today;
  return(
    <section className={styles.todayContainer}>
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
