import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyEvnet from './MyEvent'
import * as serviceWorker from './serviceWorker';

const articles = [
  {
    url: 'https://www.google.com/',
    title: 'google',
    description: 'google Home',
    isNew: true
  },
  {
    url: 'https://www.yahoo.co.jp/',
    title: 'yahoo',
    description: 'yahoo Home',
    isNew: false
  }
]
ReactDOM.render(<MyEvnet greet="Hello" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
