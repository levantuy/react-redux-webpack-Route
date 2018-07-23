import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const LOAD_REQUESTED = 'LOAD_REQUESTED'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'

const ROOT_URL = 'https://obscure-atoll-39265.herokuapp.com';
export const fetchInformation = () => ({
  [RSAA]: {
    endpoint: `${ROOT_URL}/Notice/index`,    
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      LOAD_REQUESTED, LOAD_SUCCESS, LOAD_FAILURE
    ]
  }
})