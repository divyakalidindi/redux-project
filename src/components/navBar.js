import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <div className="navigation">
      <Link to="/">Redux Blog</Link>
      <Link to="posts/new">new post</Link>
    </div>
  );
};

export default NavBar;
