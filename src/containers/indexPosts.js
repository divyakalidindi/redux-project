import React, { Component } from 'react';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends Component {


  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if (this.props.posts.length === 0) {
      return <p>No posts!</p>;
    } else {
      return this.props.posts.map((post) => {
        return (<li key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span>{post.title}</span>
          </Link>
        </li>);
      });
    }
  }

  render() {
    return (
      <ul>
        {this.renderPosts()}
      </ul>
    );
  }
}


const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(Home);
