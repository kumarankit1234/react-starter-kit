
import { combineReducers } from 'redux';

import counter from './counter-reducer';
import todoList from './todos-reducer';

export default combineReducers({
    counter,
    todoList
});