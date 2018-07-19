import { combineReducers } from 'redux';
import homeReducer from './reducer_home';
import aboutReducer from './reducer_about';

const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer
});

export default rootReducer;
