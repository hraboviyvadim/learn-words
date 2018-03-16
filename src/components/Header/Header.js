import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Home from './../../components/Home/Home.js';
import Lessons from './../../components/Lessons/Lessons.js';
import Progress from './../../components/Progress/Progress.js';
import logo from './logo.svg';

const Header = () => {
  return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Welcome to React</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/lessons">Lessons</NavLink></li>
            <li><NavLink to="/progress">Progress</NavLink></li>
          </ul>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/lessons" component={Lessons}/>
        <Route path="/progress" component={Progress}/>
      </header>
  )
};

export default Header;


