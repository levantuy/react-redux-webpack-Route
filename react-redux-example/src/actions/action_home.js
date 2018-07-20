import axios from 'axios'
//Post list
export const FETCH_NOTICES = 'FETCH_NOTICES';
export const FETCH_NOTICES_SUCCESS = 'FETCH_NOTICES_SUCCESS';
export const FETCH_NOTICES_FAILURE = 'FETCH_NOTICES_FAILURE';
export const RESET_NOTICES = 'RESET_NOTICES';

// const ROOT_URL = window.location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = 'http://flashlightvn.com/api';
export function fetchNotices(props) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/Notice/index`,
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNTMyMDcyNDkzLCJleHAiOjE1MzIwNzYwOTMsImlhdCI6MTUzMjA3MjQ5M30.evNO98-lt_YXNzYuFPInYEbAHm_MLcn4fXxvpqrNong`
    }
  });

  return {
    type: FETCH_NOTICES,
    payload: request
  };
}

export function fetchNoticesSuccess(notices) {
  return {
    type: FETCH_NOTICES_SUCCESS,
    payload: notices
  };
}

export function fetchNoticesFailure(error) {
  return {
    type: FETCH_NOTICES_FAILURE,
    payload: error
  };
}