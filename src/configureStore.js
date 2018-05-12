import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [thunk, createLogger()];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
