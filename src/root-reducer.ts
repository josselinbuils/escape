import { combineReducers } from 'redux';

import { timerReducer } from './timer/reducer';

export default combineReducers({
  timerReducer,
});
