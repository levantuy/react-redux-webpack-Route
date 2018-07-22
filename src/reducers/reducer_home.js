import * as notice from '../actions/action_home'

const INITIAL_STATE = {
    noticesList: { notices: [], error: null, loading: false },
    newNotice: { notice: null, error: null, loading: false },
    activeNotice: { notice: null, error: null, loading: false },
    deletedNotice: { notice: null, error: null, loading: false },
};

export default (state = INITIAL_STATE, action) => {
    let error;
    switch (action.type) {
        case notice.FETCH_NOTICES:// start fetching posts and set loading = true
            return { ...state, noticesList: { notices: [], error: null, loading: true } };
        case notice.FETCH_NOTICES_SUCCESS:// return list of posts and make loading = false
            return { ...state, noticesList: { notices: action.payload.data, error: null, loading: false } };
        case notice.FETCH_NOTICES_FAILURE:// return error and make loading = false
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, noticesList: { notices: [], error: error, loading: false } };
        case notice.RESET_NOTICES:// reset postList to initial state
            return { ...state, noticesList: { notices: [], error: null, loading: false } };

        case notice.CREATE_NOTICE:// start fetching posts and set loading = true
            return { ...state, newNotice: { notices: null, error: null, loading: true } };
        case notice.CREATE_NOTICE_SUCCESS:// return list of posts and make loading = false
            return { ...state, newNotice: { notices: action.payload, error: null, loading: false } };
        case notice.CREATE_NOTICE_FAILURE:// return error and make loading = false
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, newNotice: { notices: null, error: error, loading: false } };
        case notice.RESET_NOTICE_CREATE:// reset postList to initial state
            return { ...state, newNotice: { notices: null, error: null, loading: false } };

        case notice.DELETE_NOTICE:// start fetching posts and set loading = true
            return { ...state, deletedNotice: { notices: null, error: null, loading: true } };
        case notice.DELETE_NOTICE_SUCCESS:// return list of posts and make loading = false
            return { ...state, deletedNotice: { notices: null, error: null, loading: false } };
        case notice.DELETE_NOTICE_FAILURE:// return error and make loading = false
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, deletedNotice: { notices: null, error: error, loading: false } };
        case notice.RESET_NOTICE_DELETE:// reset postList to initial state
            return { ...state, deletedNotice: { notices: null, error: null, loading: false } };    


        // default    
        default:
            return state
    }
}