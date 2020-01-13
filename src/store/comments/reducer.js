import {
  FETCH_COMMENTS_STARTED,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from './consts';

export const initialState = {
  comments: [],
  commentsLoading: false,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_STARTED:
      return {
        ...state,
        comments: [],
        commentsLoading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        commentsLoading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        comments: [],
        commentsLoading: false,
      };
    default:
      return { ...state };
  }
};