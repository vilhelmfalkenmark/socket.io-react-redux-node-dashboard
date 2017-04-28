import React, { Component } from "react";
import PropTypes from 'prop-types';
import Todo from "./Todo";
import styles from "../styles/css/stylesheet.css";

class App extends Component {
 constructor() {
  super()
   this.state = {
    input: ''
   }
   this.handleChange = this.handleChange.bind(this);
   this.addTodo = this.addTodo.bind(this);
   this.deleteTodo = this.deleteTodo.bind(this);
 }

 componentDidMount() {
  this.props.fetchTodos();
  this.props.updateConnectedUsers(1);
 }

 componentWillUnMount() {
  this.props.updateConnectedUsers(-1);
 }

 handleChange(event) {
  this.setState({
   input: event.target.value
  })
  if(event.key === 'Enter') {
   const newTodo = {
    task: this.state.input
   }
   this.props.addTodo(newTodo);
  }
 }


 addTodo() {
  const newTodo = {
   task: this.state.input
  }
  this.props.addTodo(newTodo);
 }

 deleteTodo(todoID) {
  this.props.deleteTodo(todoID);
 }

 render() {
  const { todos, connectedUsers } = this.props;
  return (
   <div className={styles.container}>
    <h1>Att göra lista </h1>
    <h2>{connectedUsers} användare är anslutna </h2>
    <input type='text' onKeyPress={this.handleChange} />
    <ul>
     {
      todos.map((todo, index) => <Todo key={todo._id} todo={todo} deleteTodo={this.deleteTodo} />)
     }
    </ul>
   </div>
  )
 }
}




export default App;
