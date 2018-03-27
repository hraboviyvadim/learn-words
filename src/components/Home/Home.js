import React, {Component} from 'react';
import {increment} from '../../AC/index';
import {connect} from 'react-redux';

class Home extends Component{
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>{this.props.count} <button onClick={this.handleIncrement}>+1</button></p>
      </div>
    )
  }
  handleIncrement = () => {
    // const action = increment();
    // this.props.dispatch(action);
    this.props.wrappedIncrement();
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter
  }
}
export default connect(mapStateToProps, {wrappedIncrement: increment})(Home);