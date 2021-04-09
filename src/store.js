import { applyMiddleware } from 'redux';
import { createStore } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers/MyReducers.js';

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares),
);

export default store;
