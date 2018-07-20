import axios from 'axios'
//Notices list
export const FETCH_NOTICES = 'FETCH_NOTICES';
export const FETCH_NOTICES_SUCCESS = 'FETCH_NOTICES_SUCCESS';
export const FETCH_NOTICES_FAILURE = 'FETCH_NOTICES_FAILURE';
export const RESET_NOTICES = 'RESET_NOTICES';

//Notice item
export const CREATE_NOTICE = 'CREATE_NOTICE';
export const CREATE_NOTICE_SUCCESS = 'CREATE_NOTICE_SUCCESS';
export const CREATE_NOTICE_FAILURE = 'CREATE_NOTICE_FAILURE';
export const RESET_NOTICE_CREATE = 'RESET_NOTICE_CREATE';

//#region NOTICES

const ROOT_URL = 'http://flashlightvn.com/api';
export function fetchNotices(props) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/Notice/index`,
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNTMyMDk2ODk1LCJleHAiOjE1MzIxMDA0OTUsImlhdCI6MTUzMjA5Njg5NX0.KcC925XfUmsElVcVkdVTAA2TwlJT5Vg8IL8ca1c8X_o`
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
    payload: notices.data
  };
}

export function fetchNoticesFailure(error) {
  return {
    type: FETCH_NOTICES_FAILURE,
    payload: error
  };
}

//#endregion

