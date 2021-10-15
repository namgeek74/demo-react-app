import { combineReducers } from 'redux';
import reducerCounter from './counterReducer';
import reducerTodo from './todoReducer';

const reducers = combineReducers({ reducerCounter, reducerTodo });
export default reducers;