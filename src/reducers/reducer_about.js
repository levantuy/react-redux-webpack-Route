import { LOAD_REQUESTED, LOAD } from '../actions/action_about'

const initialState = {
    load: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REQUESTED:
            return {
                ...state,
                load: true
            }

        case LOAD:
            return {
                ...state,
                load: !state.load
            }     

        default:
            return state
    }
}