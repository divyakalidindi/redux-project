import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  FETCH_POSTS: 'FETCH_POSTS',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://damp-basin-30328.herokuapp.com/api';
// const ROOT_URL = 'https://fathomless-coast-19908.herokuapp.com/api';
const API_KEY = '?key=divya_kalidindi';

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin/${API_KEY}`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup/${API_KEY}`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(error => {
      dispatch(authError(`Sign Un Failed: ${error.response.data}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

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
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, payload: null });
      browserHistory.push('/');
    }).catch(error => {
      console.log('error');
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: { post: response.data } });
    }).catch(error => {
      console.log('error-update');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
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
