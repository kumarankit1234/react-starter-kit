import React from 'react';
import ReactDOM from 'react-dom';
import printMe from './print';

import './main.css';
import './index.scss';

ReactDOM.render(
    <div onClick={printMe} className="main">
        <div>Hello, yo!</div>
        <div> YAY </div>
    </div>,
    document.getElementById('root')
);