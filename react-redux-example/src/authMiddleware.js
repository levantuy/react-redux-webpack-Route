import { TOKEN_RECEIVED, fetchToken } from './actions/action_auth';
import { isRSAA, apiMiddleware } from 'redux-api-middleware';
import { refreshToken, isAccessTokenExpired } from './reducers/reducer_auth'

export function createApiMiddleware() {
  let postponedRSAAs = []

  return ({ dispatch, getState }) => {
    const rsaaMiddleware = apiMiddleware({dispatch, getState})

    return (next) => (action) => {
      const nextCheckPostoned = (nextAction) => {
          // Run postponed actions after token refresh
          if (nextAction.type === TOKEN_RECEIVED) {
            next(nextAction);
            postponedRSAAs.forEach((postponed) => {
              rsaaMiddleware(next)(postponed)
            })
            postponedRSAAs = []
          } else {
            next(nextAction)
          }
      }

      if(isRSAA(action)) {
        const state = getState(),
              token = refreshToken(state)

        if(!token && isAccessTokenExpired(state)) {
          postponedRSAAs.push(action)
          if(postponedRSAAs.length === 1) {
            return  rsaaMiddleware(nextCheckPostoned)(fetchToken())
          } else {
            return
          }
        }

        return rsaaMiddleware(next)(action);
      }
      return next(action);
    }
  }
}

export default createApiMiddleware();
