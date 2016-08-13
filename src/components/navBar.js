import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const NavBar = (props) => {
  return (
    <nav>
      <li><Link to="/">home</Link></li>
      <li><Link to="posts/new"> + new post</Link></li>
    </nav>
  );
};

export default NavBar;
