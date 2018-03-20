import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './../Header/Header';
import Home from "../Home/Home";
import Progress from "../Progress/Progress";
import Lessons from "../Lessons/Lessons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/lessons" component={Lessons}/>
          <Route path="/progress" component={Progress}/>
        </Switch>
      </div>
    );
  }
}

export default App;
