import {connect} from "react-redux";
import App from "../components/App";
import {fetchTodos, addTodo, deleteTodo} from "../actions/TodoActions";
import {updateConnectedUsers} from "../actions/UserActions";

function mapStateToProps(state) {
    return ({
     todos: state.todos,
     connectedUsers: state.users
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
        },
        updateConnectedUsers: (count) => {
            dispatch(updateConnectedUsers(count))
        }
    })
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;
