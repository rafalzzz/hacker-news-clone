import { 
    FETCH_COMMENTS_STARTED, 
    FETCH_COMMENTS_SUCCESS, 
    FETCH_COMMENTS_FAILURE 
} from "./consts";


export const fetchPostsStarted = payload => ({
    type: FETCH_COMMENTS_STARTED, 
    payload
});

export const fetchPostSuccess = payload => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload,
});

export const fetchPostFailure = () => ({type: FETCH_COMMENTS_FAILURE});