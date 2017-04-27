import React, { Component } from "react";
import PropTypes from 'prop-types';
class Todo extends Component {

 render() {
  const { todo: {task, id} } = this.props;
  return (
   <li>
     {task}
     <button onClick={this.props.deleteTodo.bind(this, id)}>Radera</button>
   </li>
  )
 }
}

Todo.PropTypes = {
 // todo: PropTypes.shape({
 //   task: PropTypes.number,
 //   id: PropTypes.number
 // })
 todo: PropTypes.string,
 requiredFunc: PropTypes.func.isRequired
}


export default Todo;
