import { RSAA } from 'redux-api-middleware';
//Token list
export const TOKEN_REQUEST = '@@jwt/TOKEN_REQUEST';
export const TOKEN_RECEIVED = '@@jwt/TOKEN_RECEIVED';
export const TOKEN_FAILURE = '@@jwt/TOKEN_FAILURE';

const ROOT_URL = 'https://obscure-atoll-39265.herokuapp.com';
export const fetchToken = () => ({
    [RSAA]: {
        endpoint: `${ROOT_URL}/users/register`,
        method: 'POST',
        body: JSON.stringify({username: 'admin', password: '123456'}),
        headers: { 'Content-Type': 'application/json' },
        types: [
          TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
        ]
    }
})


