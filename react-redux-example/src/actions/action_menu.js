import axios from 'axios'
//Post list
export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU';
export const RESET_MENU = 'RESET_MENU';

// const ROOT_URL = window.location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
const ROOT_URL = 'http://flashlightvn.com/api';
export function fetchNotices(props) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/Notice/index`,
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNTMyMDU4MjExLCJleHAiOjE1MzIwNjE4MTEsImlhdCI6MTUzMjA1ODIxMX0.Q2aBI0E_mCoN_uYgQ6vojqEjod4tdCn8yD8qhvXaw4M`
    }
  });

  return {
    type: FETCH_MENU,
    payload: request
  };
}

export function fetchNoticesSuccess(notices) {
  return {
    type: FETCH_MENU_SUCCESS,
    payload: notices
  };
}

export function fetchNoticesFailure(error) {
  return {
    type: FETCH_MENU_FAILURE,
    payload: error
  };
}