import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        const { store } = this.props;
        store.dispatch({
            type: 'DECREMENT'
        })
        this.unsubscribe();
    }

    render() {
        debugger;
        const { store } = this.props;
        return <div onClick={() => {
            store.dispatch({
                type: 'INCREMENT'
            })
        }}> {store.getState()} </div>
    }
}


module.exports = Home;