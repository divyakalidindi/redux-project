import React, { Component } from 'react';
import { fetchPost, deletePost, updatePost } from '../actions/index';
import { connect } from 'react-redux';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';
import { Link } from 'react-router';


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTitle: '',
      newTag: '',
      newContent: '',
      isEditTitle: false,
      isEditTags: false,
      isEditContent: false,
    };
    this.titleOnChange = this.titleOnChange.bind(this);
    this.tagsOnChange = this.tagsOnChange.bind(this);
    this.contentOnChange = this.contentOnChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }


  setTitle() {
    this.setState({ ...this.state, isEditTitle: false });
    this.updatePost();
  }

  setTags() {
    this.setState({ ...this.state, isEditTags: false });
    this.updatePost();
  }

  setContent() {
    this.setState({ ...this.state, isEditContent: false });
    this.updatePost();
  }

  updatePost() {
    this.props.updatePost(this.props.params.id, { title: this.state.newTitle, tags: this.state.newTag, content: this.state.newContent });
  }
  deletePost() {
    this.props.deletePost(this.props.params.id);
  }

  titleOnChange(event) {
    this.setState({ newTitle: event.target.value });
  }

  tagsOnChange(event) {
    this.setState({ newTag: event.target.value });
  }

  contentOnChange(event) {
    this.setState({ newContent: event.target.value });
  }

  renderTitleEdits() {
    if (!this.state.isEditTitle) {
      return (
        <div className="titles" onClick={() => this.setState(
          { isEditTitle: true,
            isEditTags: false,
            isEditContent: false,
            newTitle: this.props.post.title,
            newTag: this.props.post.tags,
            newContent: this.props.post.content,
            author: this.props.post.author.username,
          })}>{this.props.post.title}</div>
      );
    } else {
      return (
        <input className="titles" value={this.state.newTitle} onChange={this.titleOnChange} onBlur={this.setTitle} autoFocus />
      );
    }
  }

  renderTagEdits() {
    if (!this.state.isEditTags) {
      return (
        <div className="tags" onClick={() => this.setState({
          isEditTitle: false,
          isEditTags: true,
          isEditContent: false,
          newTitle: this.props.post.title,
          newTag: this.props.post.tags,
          newContent: this.props.post.content,
          author: this.props.post.author.username,
        })}><i>{this.props.post.tags}</i></div>
      );
    } else {
      return (
        <input className="tags" value={this.state.newTag} onChange={this.tagsOnChange} onBlur={this.setTags} autoFocus />
      );
    }
  }

  renderContentEdits() {
    if (!this.state.isEditContent) {
      return (
        <div className="contents" onClick={() => this.setState({
          isEditTitle: false,
          isEditTags: false,
          isEditContent: true,
          newTitle: this.props.post.title,
          newTag: this.props.post.tags,
          newContent: this.props.post.content,
          author: this.props.post.author.username,
        })}>
          <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }}></div>
        </div>
      );
    } else {
      return (
        <Textarea className="contents" value={this.state.newContent} onChange={this.contentOnChange} onBlur={this.setContent} autoFocus />
      );
    }
  }

  render() {
    if (!this.props.post) {
      return <p>loading...</p>;
    } else {
      return (
        <div className="showPosts">
          <div className="postHeader">
            <Link to="/">Back to Index</Link>
          </div>
          <div className="showNote">
            <div className="title-box">
              <div>{this.renderTitleEdits()}</div>
            </div>
            <h5>created by {this.state.author}</h5>
            <div className="tags-box">
              <div>{this.renderTagEdits()}</div>
            </div>
            <div className="contents-box">
              <div>{this.renderContentEdits()}</div>
            </div>
            <button id="delButton" onClick={this.deletePost}>Delete</button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Show);
