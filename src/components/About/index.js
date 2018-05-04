import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const About = ({ match }) =>
    (
        <div> About
        <li><Link to={`${match.url}/carnitas`}>Carnitas</Link></li>


            <Route
                path={match.url + '/carnitas'}
                render={() => {
                    return <div>Carnitas</div>
                }}
                exact
            />
        </div >
    )


module.exports = About;