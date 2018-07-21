import axios from 'axios'
import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'
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
export const fetchNotices = () => ({
  [RSAA]: {
    endpoint: `${ROOT_URL}/Notice/index`,    
    method: 'GET',
    // body: JSON.stringify({message: message}),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      FETCH_NOTICES, FETCH_NOTICES_SUCCESS, FETCH_NOTICES_FAILURE
    ]
  }
})

//#endregion

