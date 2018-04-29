import React from 'react';
import ReactDOM from 'react-dom';
import printMe from './print';

import './main.css';
import './index.scss';

ReactDOM.render(
    <h1 onClick={printMe}>Hello, yo!</h1>,
    document.getElementById('root')
);