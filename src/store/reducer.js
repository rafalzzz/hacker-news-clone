import { combineReducers } from 'redux';

import { postsReducer } from './posts/reducer';
import { commentsReducer } from './comments/reducer'

const reducers = {
  posts: postsReducer,
  comments: commentsReducer
};

export const rootReducer = combineReducers(reducers);