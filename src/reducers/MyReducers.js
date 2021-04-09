import { combineReducers } from 'redux';

import LangReducer from './LangReducer.js';

export default combineReducers({
  whatever: LangReducer,
});
