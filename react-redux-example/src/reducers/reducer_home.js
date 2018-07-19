import { INCREMENT, INCREMENT_SUCCESS, INCREMENT_FAILURE } from '../actions/action_home'

const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                isIncrementing: true
            }

        case INCREMENT_SUCCESS:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            }

        case INCREMENT_FAILURE:
            return {
                ...state,
                isDecrementing: true
            }

        default:
            return state
    }
}