import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ counter, onClick }) => {
    return (
        <div onClick={onClick}>
            {counter}
        </div>
    )

}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

module.exports = HomeContainer;