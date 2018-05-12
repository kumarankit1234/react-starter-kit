import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

const addLogging = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        console.log(store.getState());
        console.log("hello");
        rawDispatch(action);
        console.log(store.getState());
    }
}

const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
        if (action.then === 'function') {
            return action.then(rawDispatch);
        }
        return rawDispatch(action);
    }
}

store.dispatch = addLogging(store);
store.dispatch = addPromiseSupportToDispatch(store);

export default store;
