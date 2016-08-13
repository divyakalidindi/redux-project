import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signoutUser();
  }

  render() {
    return (
      <nav>
        <li><Link to="/">home</Link></li>
        <li><Link to="/posts/new"> + new post</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><button onClick={this.signOut}>Sign Out</button></li>
      </nav>
  );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, { signoutUser })(NavBar);
