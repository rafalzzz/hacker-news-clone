import {
  FETCH_USER_STARTED,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from './consts';

export const initialState = {
  user: [],
  userLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_STARTED:
      return {
        ...state,
        user: [],
        userLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: [],
        userLoading: false,
      };
    default:
      return { ...state };
  }
};