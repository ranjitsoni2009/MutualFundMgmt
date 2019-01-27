import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './js/Main.Component';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, BrowserHistory} from 'react-router';


ReactDOM.render(<MainComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();