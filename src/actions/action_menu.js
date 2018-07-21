//Post list
export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU';
export const RESET_MENU = 'RESET_MENU';

export function fetchNoticesSuccess(notices) {
  return {
    type: FETCH_MENU_SUCCESS,
    payload: notices
  };
}

export function fetchNoticesFailure(error) {
  return {
    type: FETCH_MENU_FAILURE,
    payload: error
  };
}