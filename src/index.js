import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import Mocks from "./mocks/state";
import * as serviceWorker from './serviceWorker';
import {reducer} from './reducer';
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
        <App  data = {Mocks}/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
