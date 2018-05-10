import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from './components/Main';
import printMe from './print';
import store from './configureStore';


import './main.css';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}