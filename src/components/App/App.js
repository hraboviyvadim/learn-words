import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Auth/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
