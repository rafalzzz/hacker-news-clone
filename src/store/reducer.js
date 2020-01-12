import { combineReducers } from 'redux';

import { postsReducer } from './posts/reducer';

const reducers = {
  posts: postsReducer,
};

export const rootReducer = combineReducers(reducers);