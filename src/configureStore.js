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

store.dispatch = addLogging(store);

export default store;
