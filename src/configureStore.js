import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const addLogging = (store) => (next) => (action) => {
    console.log(store.getState());
    console.log("hello");
    next(action);
    console.log(store.getState());
}


const addLogging2 = (store) => (next) => (action) => {
    console.log(store.getState());
    console.log("YOLO");
    next(action);
    console.log(store.getState());
}


const addPromiseSupportToDispatch = (store) => (next) => (action) => {
    console.log("Promise");
    if (action.then === 'function') {
        return action.then(next);
    }
    return next(action);

}
const middlewares = [addPromiseSupportToDispatch, addLogging, addLogging2];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
