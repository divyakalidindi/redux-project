import React, { Component } from 'react';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContents = this.onChangeContents.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }

  onSubmit(event) {
    let fields = { title: this.state.title, content: this.state.content, tags: this.state.tags, author: this.props.user };
    if (this.state.title.length === 0) {
      fields = { title: 'untitled post', content: this.state.content, tags: this.state.tags, author: this.props.user };
      this.props.createPost(fields);
    } else {
      this.props.createPost(fields);
    }
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeContents(event) {
    this.setState({ content: event.target.value });
  }

  onChangeTags(event) {
    this.setState({ tags: event.target.value });
  }

  render() {
    return (
      <div className="newPost">
        <div className="heading">
          <span>Create a New Post</span>
        </div>
        <div className="inputs">
          <input value={this.state.title} onChange={this.onChangeTitle} placeholder={"title"} />
        </div>
        <div className="inputs">
          <input value={this.state.tags} onChange={this.onChangeTags} placeholder="tags" />
        </div>
        <div className="inputs">
          <input value={this.state.contents} onChange={this.onChangeContents} placeholder="contents" />
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
}
// mapStateToProps
const mapStateToProps = (state) => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToProps, { createPost })(Post);
