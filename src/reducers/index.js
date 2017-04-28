import { combineReducers } from 'redux';
import todos from './TodoReducer';
import users from './UserReducer';

const rootReducer = combineReducers({todos, users})

export default rootReducer;
