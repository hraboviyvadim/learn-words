import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aside from './Aside/Aside';

class Dashboard extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="dashboard">
        <Aside />
      </div>
    )
  }
};

export default Dashboard;
