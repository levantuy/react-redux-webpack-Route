import { combineReducers } from 'redux';
import home from './reducer_home';
import about from './reducer_about';

const rootReducer = combineReducers({
  homeReducer: home,
  aboutReducer: about
});

export default rootReducer;
