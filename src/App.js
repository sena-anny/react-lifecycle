import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import MyEvent from './MyEvent'
import MyHello from './MyHello'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/hello">Hello</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={MyEvent} />
          <Route exact path="/hello" component={MyHello} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
