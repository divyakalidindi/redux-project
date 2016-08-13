import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
}

onChangeEmail(event) {
  this.setState({ email: event.target.value });
}

onChangePassword(event) {
  this.setState({ password: event.target.value });
}

onChangeUsername(event) {
  this.setState({ username: event.target.value });
}

onSubmit(event) {
  this.props.signupUser({
    email: this.state.email,
    password: this.state.password,
    username: this.state.username,
  })
}

render() {
  return (
    <div className="newSignup">
      <p>Sign Up</p>
      <div>
        <input onChange={this.onChangeUsername} value={this.state.username} placeholder="username" />
      </div>
      <div>
        <input onChange={this.onChangeEmail} value={this.state.email} placeholder="email" />
      </div>
      <div>
        <input onChange={this.onChangePassword} value={this.state.password} placeholder="password" />
      </div>
      <div className="button">
        <button id="submit" onClick={this.onSubmit}>Submit</button>
        <Link to="/">
          <button id="cancel">Cancel</button>
        </Link>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

return connect(mapStateToProps, actions)(Signup);
