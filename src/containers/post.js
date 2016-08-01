import React, { Component } from 'react';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: '',
      tags: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContents = this.onChangeContents.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }

  onSubmit(event) {
    const fields = { title: this.state.title, contents: this.state.contents, tags: this.state.tags };
    this.props.createPost(fields);
    console.log('created Post!');
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeContents(event) {
    this.setState({ contents: event.target.value });
  }

  onChangeTags(event) {
    this.setState({ tags: event.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.onChangeTitle} placeholder={"title"} />
        <input value={this.state.contents} onChange={this.onChangeContents} placeholder="contents" />
        <input value={this.state.tags} onChange={this.onChangeTags} placeholder="tags" />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(null, { createPost })(Post);
