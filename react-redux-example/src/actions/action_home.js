import axios from 'axios'

export const INCREMENT = 'action_home/INCREMENT'
export const INCREMENT_SUCCESS = 'action_home/INCREMENT_SUCCESS'
export const INCREMENT_FAILURE = 'action_home/INCREMENT_SUCCESS'

const ROOT_URL = window.location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchPosts(props) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/GetPosts`,
    headers: []
  });

  return {
    type: INCREMENT,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: INCREMENT_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: INCREMENT_FAILURE,
    payload: error
  };
}