import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  FETCH_POSTS: 'FETCH_POSTS',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=divya_kalidindi';

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  };
}

export function createPost(post) {
  console.log(post);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then(response => {
      dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post._id}${API_KEY}`, post).then(response => {
      dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  };
}

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch(error => {
      console.log('error');
    });
  };
}
