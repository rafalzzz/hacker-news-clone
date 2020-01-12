import { 
    FETCH_POSTS_STARTED, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE 
} from "./consts";


export const fetchPostsStarted = payload => ({
    type: FETCH_POSTS_STARTED, 
    payload
});

export const fetchPostSuccess = payload => ({
    type: FETCH_POSTS_SUCCESS,
    payload,
});

export const fetchPostFailure = () => ({type: FETCH_POSTS_FAILURE});