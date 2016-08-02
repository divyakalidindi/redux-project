import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {


  componentWillMount() {
    this.props.fetchPosts();
  }

  render () {
      if ( this.props.posts == null ) {
        console.log('null');
        <h1>There are no posts!</h1>
      } else {
          return this.props.posts.map((post) => {
            // return Link?
            console.log('return a link?');
          });
      }
    }

const mapStateToProps = (state) => {

  posts: state.posts.all

}};

export default connect(mapStateToProps, { fetchPosts })(Home);
