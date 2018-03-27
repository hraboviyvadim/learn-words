import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Login:</p>
        <div>
          <label>
            <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
          </label>
        </div>
        <div>
          <label>
            <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
          </label>
        </div>
        <div><input type="submit" value="Submit" /></div>
      </form>
    );
  }
}

export default Login;