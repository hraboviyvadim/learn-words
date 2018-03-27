import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import {PrivateRoute} from '../lib/PrivateRoute';
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import NoMatch from '../NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
