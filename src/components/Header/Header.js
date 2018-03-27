import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';

class Header extends Component {  
  render() {
      return (
        <header className="header">
         <div className="header-in">
          <div className="header-left">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className="title">LearnWords</h1>
          </div>
          <div className="header-right">
            <Link to="/login">Login</Link>
          </div>
         </div>
      </header>
    )  
  }
};

const HeaderWithRouter = withRouter(Header);

export default Header;


