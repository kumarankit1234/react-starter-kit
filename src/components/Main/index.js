import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { createStore } from 'redux';


import Home from './../Home';
import About from './../About';

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

const Main = () =>
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <hr />

            <Route exact path="/" render={(routeProps) => {
                return <Home {...routeProps} store={store} />
            }} />
            <Route path="/about" component={About} />
        </div>
    </Router>


module.exports = Main;