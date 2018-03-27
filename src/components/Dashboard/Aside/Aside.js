import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export class Aside extends Component {
  static propTypes = {}

  render() {
    return (
      <aside className="sidebar">
        <nav className="nav">
          <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/lessons">Lessons</NavLink></li>
            <li><NavLink to="/progress">Progress</NavLink></li>
          </ul>
        </nav>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
