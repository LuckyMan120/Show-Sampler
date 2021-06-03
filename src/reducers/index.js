import { combineReducers } from 'redux';
import appReducer from './appReducer';
import playerReducer from './playerReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  appReducer,
  playerReducer,
  errorReducer,
});

export default rootReducer;
