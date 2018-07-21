export const LOAD_REQUESTED = 'action_about/LOAD_SUCCESS'
export const LOAD = 'action_about/LOAD'

export const load = () => {
  return dispatch => {
    dispatch({
      type: LOAD_REQUESTED
    })

    dispatch({
      type: LOAD
    })
  }
}