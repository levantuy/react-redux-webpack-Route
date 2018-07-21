import { combineReducers } from 'redux';
import about from './reducer_about';
import home, * as fromNotice from './reducer_home'
import auth, * as fromAuth from './reducer_auth';

const rootReducer = combineReducers({
  homeReducer: home,
  aboutReducer: about,
  authReducer: auth
});
export default rootReducer

export const accessToken = state => fromAuth.accessToken(state.authReducer)
export const reducer_fetchNotices = state => fromNotice.reducer_fetchNotices(state.homeReducer)

export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}
