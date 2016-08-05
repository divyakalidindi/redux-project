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
      return <h1>No posts!</h1>;
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
      <div className="PostsList">
        {this.renderPosts()}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(Home);
