import initialState from './initial-state';
const counter = (state = initialState.counter, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }
}

export default counter;