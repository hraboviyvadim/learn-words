import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
      </header>
  )
};

export default Header;


