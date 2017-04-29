import { combineReducers } from 'redux';
import todos from './TodoReducer';
import users from './UserReducer';
import today from './TodayReducer';
import departures from './DepartureReducer';
import stations from './StationReducer';

const rootReducer = combineReducers({todos, users, today, departures, stations})

export default rootReducer;
