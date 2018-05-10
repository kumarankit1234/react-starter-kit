import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './components/Main';
import printMe from './print';


import './main.css';
import './index.scss';


const counter = (state = 0, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }
}

const store = createStore(counter);


ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}