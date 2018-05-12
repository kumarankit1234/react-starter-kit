import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

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

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    })
}
const middlewares = [addPromiseSupportToDispatch, addLogging, addLogging2];
wrapDispatchWithMiddlewares(store, middlewares);

export default store;
