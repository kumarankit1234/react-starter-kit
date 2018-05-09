import React, { Component } from 'react';
import { createStore } from 'redux';

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


class Home extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        store.dispatch({
            type: 'DECREMENT'
        })
        this.unsubscribe();
    }

    render() {
        return <div onClick={() => {
            store.dispatch({
                type: 'INCREMENT'
            })
        }}> {store.getState()} </div>
    }
}


module.exports = Home;