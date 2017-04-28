import React, { Component } from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import TodayContainer from "../../containers/TodayContainer";

import styles from "../../styles/css/stylesheet.css";

class TodoList extends Component {
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
  // this.props.updateConnectedUsers(1);
 }

 componentWillUnMount() {
  // this.props.updateConnectedUsers(-1);
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
  const { todos } = this.props;
  return (
   <section className={styles.todolist}>
    <TodayContainer />
    <h2>Att göra lista </h2>
    <input type='text' onKeyPress={this.handleChange} className={styles.text_input}/>
    <ul>
     {
      todos.map((todo, index) => <TodoItem key={todo._id} todo={todo} deleteTodo={this.deleteTodo} />)
     }
    </ul>
   </section>
  )
 }
}




export default TodoList;
