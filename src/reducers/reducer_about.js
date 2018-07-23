import * as about from '../actions/action_about'

const initialState = {
    aboutState: {error: null, loading: false}
}

export default (state = initialState, action) => {
    let error;
    switch (action.type) {
        case about.LOAD_REQUESTED:            
            return {
                ...state,
                aboutState: {error: null, loading: true}
            }

        case about.LOAD_SUCCESS:
            
            return {
                ...state,
                aboutState: {error: null, loading: false}
            }
        case about.LOAD_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return {
                ...state,
                aboutState: {error: error, loading: false}
            }

        default:
            return state
    }
}