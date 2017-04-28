import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../../styles/css/stylesheet.css";

class TodoItem extends Component {

 render() {
  const { todo: {task, done, _id} } = this.props;
  return (
   <li className={styles.todo_item}>
     <div className={styles.todo_task}>
      <p>{task}</p>
     </div>
     <div className={styles.todo_buttons}>
      <button onClick={this.props.deleteTodo.bind(this, _id)} className={styles.delete_btn}></button>
     </div>
   </li>
  )
 }
}



export default TodoItem;
