import { 
    FETCH_USER_STARTED, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE 
} from "./consts";


export const fetchUserStarted = payload => ({
    type: FETCH_USER_STARTED, 
    payload
});

export const fetchUserSuccess = payload => ({
    type: FETCH_USER_SUCCESS,
    payload,
});

export const fetchUserFailure = () => ({type: FETCH_USER_FAILURE});