import React, { Component } from "react";
import PropTypes from 'prop-types';
import TodoContainer from "../containers/TodoContainer";
import DeparturesContainer from "../containers/DeparturesContainer";
import styles from "../styles/css/stylesheet.css";

const Dashboard = () =>  {
 return (
  <div className={styles.container}>
    <TodoContainer />
    <DeparturesContainer />
  </div>
 )
}





export default Dashboard;
