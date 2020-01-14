import { 
    FETCH_COMMENTS_STARTED, 
    FETCH_COMMENTS_SUCCESS, 
    FETCH_COMMENTS_FAILURE 
} from "./consts";


export const fetchCommentsStarted = payload => ({
    type: FETCH_COMMENTS_STARTED, 
    payload
});

export const fetchCommentsSuccess = payload => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload,
});

export const fetchCommentsFailure = () => ({type: FETCH_COMMENTS_FAILURE});