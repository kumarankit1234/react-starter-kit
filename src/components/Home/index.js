import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ state, onClick }) => {
    return (
        <div onClick={onClick}>
            {state}
        </div>
    )

}

const mapStateToProps = (state) => ({
    state
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