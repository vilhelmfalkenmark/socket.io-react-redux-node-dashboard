import React, { Component } from "react";
import PropTypes from 'prop-types';

import Todo from "./Todo";

class App extends Component {
 constructor() {
  super()
   this.state = {
    input: ''
   }
   this.addTodo = this.addTodo.bind(this);
   this.deleteTodo = this.deleteTodo.bind(this);
 }

 addTodo() {
  const newTodo = {
   task: this.state.input,
   id: Date.now()
  }
  this.props.addTodo(newTodo);
 }

 deleteTodo(todoID) {
  this.props.deleteTodo(todoID);
 }

 render() {
  const { todos } = this.props;
  return (
   <div>
    <h1>React-Redux Boilerplate</h1>
    <input type='text' onChange={(e) => this.setState({input: e.target.value})} />
    <button onClick={this.addTodo}>Lägg till ny sak</button>
    <ul>
     {
      todos.map((todo, index) => <Todo key={index} todo={todo} deleteTodo={this.deleteTodo} />)
     }
    </ul>
   </div>
  )
 }
}

App.PropTypes = {
 todo: PropTypes.string,
 requiredFunc: PropTypes.func.isRequired
}


export default App;
