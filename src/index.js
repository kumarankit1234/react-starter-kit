import React from 'react';
import ReactDOM from 'react-dom';
import printMe from './print';

import Main from './components/Main';

import './main.css';
import './index.scss';

ReactDOM.render(
    <Main />, document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}