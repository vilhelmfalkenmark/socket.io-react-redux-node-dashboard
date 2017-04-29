import { combineReducers } from 'redux';
import todos from './TodoReducer';
import users from './UserReducer';
import today from './TodayReducer';
import departures from './DepartureReducer';

const rootReducer = combineReducers({todos, users, today, departures})

export default rootReducer;
