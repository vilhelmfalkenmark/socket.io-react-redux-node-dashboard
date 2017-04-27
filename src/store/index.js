import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import rootReducer from "../reducers"
import io from 'socket.io-client';
import {startSocket, socketMiddleWare} from '../socket';

const middleware = applyMiddleware(socketMiddleWare, promise(), thunk, logger())
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

startSocket(store);

export default store;
