import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from './consts';

export const initialState = {
  posts: [],
  postsLoading: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        posts: [],
        postsLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        postsLoading: false,
      };
    default:
      return { ...state };
  }
};