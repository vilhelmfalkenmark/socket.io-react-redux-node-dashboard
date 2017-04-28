import { combineReducers } from 'redux';
import todos from './TodoReducer';
import users from './UserReducer';
import today from './TodayReducer';

const rootReducer = combineReducers({todos, users, today})

export default rootReducer;
