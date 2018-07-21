import { TOKEN_RECEIVED } from '../actions/action_auth'

const INITIAL_STATE = {
    token: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOKEN_RECEIVED:
            return {
                ...state,
                token: action.payload
            }
        // default    
        default:
            return state
    }
}

export function refreshToken(state) {
    if (state.authReducer) {
        return state.authReducer.token.Token
    }
}

export function isAccessTokenExpired(state) {
    if (state.authReducer && state.authReducer.token.Expiration) {
        return 1000 * state.authReducer.token.Expiration - (new Date()).getTime() < 5000
    }
    return true
}

export function accessToken(state) {
    if (state.token) {
        return state.token.Token
    }
}