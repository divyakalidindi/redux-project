import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  FETCH_POSTS: 'FETCH_POSTS',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'damp-basin-30328.herokuapp.com';
const API_KEY = '?key=divya_kalidindi';

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: { post: response.data } });
    }).catch(error => {
      console.log('error-single/fetch');
    });
  };
}

export function createPost(post) {
  console.log(post);
  return (dispatch) => {
    console.log('got here');
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, payload: null });
      browserHistory.push('/');
    }).catch(error => {
      console.log('error');
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: { post: response.data } });
    }).catch(error => {
      console.log('error-update');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      browserHistory.push('/');
    }).catch(error => {
      console.log('error-delete');
    });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: { posts: response.data } });
    }).catch(error => {
      console.log('error-fetches');
    });
  };
}
