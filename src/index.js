import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/game.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
