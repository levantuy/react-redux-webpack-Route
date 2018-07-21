import { RSAA } from 'redux-api-middleware';
//Token list
export const TOKEN_REQUEST = '@@jwt/TOKEN_REQUEST';
export const TOKEN_RECEIVED = '@@jwt/TOKEN_RECEIVED';
export const TOKEN_FAILURE = '@@jwt/TOKEN_FAILURE';

const ROOT_URL = 'http://flashlightvn.com/api';
export const fetchToken = () => ({
    [RSAA]: {
        endpoint: `${ROOT_URL}/Token?username=admin&password=123456`,
        method: 'GET',
        // body: JSON.stringify({refresh: token}),
        headers: { 'Content-Type': 'application/json' },
        types: [
          TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
        ]
    }
})


