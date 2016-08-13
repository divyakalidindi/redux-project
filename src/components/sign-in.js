import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signinUser } from '../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    this.props.signinUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="newSignin">
        <h9>Sign In</h9>
        <div className="inputs">
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
      </div>
  );
  }
}

export default connect(null, { signinUser })(Signin);
