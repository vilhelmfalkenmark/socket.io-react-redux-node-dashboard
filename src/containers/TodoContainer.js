import {connect} from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import {fetchTodos, addTodo, deleteTodo} from "../actions/TodoActions";

function mapStateToProps(state) {
    return ({
     todos: state.todos
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchTodos: () => {
            dispatch(fetchTodos())
        },
        addTodo: (todoObject) => {
            dispatch(addTodo(todoObject))
        },
        deleteTodo: (todoID) => {
            dispatch(deleteTodo(todoID))
        }
    })
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoContainer;
