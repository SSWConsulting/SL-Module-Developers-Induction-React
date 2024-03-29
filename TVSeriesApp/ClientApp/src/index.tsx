import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Router from 'react-router-dom';
import * as Containers from './containers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router.BrowserRouter>
    <Containers.App />
  </Router.BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
