import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        const { store } = this.context;
        store.dispatch({
            type: 'DECREMENT'
        })
        this.unsubscribe();
    }

    render() {
        debugger;
        const { store } = this.context;
        return <div onClick={() => {
            store.dispatch({
                type: 'INCREMENT'
            })
        }}> {store.getState()} </div>
    }
}

Home.contextTypes = {
    store: PropTypes.object
}

module.exports = Home;