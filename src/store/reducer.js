import { combineReducers } from 'redux';

import { postsReducer } from './posts/reducer';
import { commentsReducer } from './comments/reducer'
import { userReducer } from './user/reducer';


const reducers = {
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer
};

export const rootReducer = combineReducers(reducers);