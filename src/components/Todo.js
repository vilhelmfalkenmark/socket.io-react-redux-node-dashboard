import React, { Component } from "react";
import PropTypes from 'prop-types';
class Todo extends Component {

 render() {
  const { todo: {task, done, _id} } = this.props;
  return (
   <li>
     {task}
     <button onClick={this.props.deleteTodo.bind(this, _id)}>Radera</button>
   </li>
  )
 }
}



export default Todo;
