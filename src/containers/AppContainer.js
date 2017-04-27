import {connect} from "react-redux";
import App from "../components/App";
import {addTodo, deleteTodo} from "../actions/TodoActions";

function mapStateToProps(state) {
    return ({todos: state.todos})
}

function mapDispatchToProps(dispatch) {
    return ({
        addTodo: (todoObject) => {
            dispatch(addTodo(todoObject))
        },
        deleteTodo: (todoID) => {
            dispatch(deleteTodo(todoID))
        }
    })
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;
