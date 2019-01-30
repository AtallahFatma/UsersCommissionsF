// action types
import {
    API_GET_USER,
    API_GET_USER_SUCCESS,
    API_GET_USER_FAILURE,
    API_USER_REGISTER,
    API_USER_REGISTER_SUCCESS,
    API_USER_REGISTER_FAILURE,
    API_USER_LOGIN,
    API_USER_LOGIN_SUCCESS,
    API_USER_LOGIN_FAILURE
} from './ActionsTypes'

// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    user: null,
    registerFailure: null,
    addingUser: false,
    userId: null,
    loggingIn: false,
    loginFailure: null,
    loginSuccess: null,
};

// set user information if user/{userId} called
const setUserInformations = (state, action) => {
    let newState = Object.assign({}, state);
    newState.user = action.payload;
    newState.fetching = false;
    return newState;
};

// set user user Id after login
const setUserID = (state, action) => {
    let newState = Object.assign({}, state);
    newState.userId = action.payload.userId;
    newState.loggingIn = false;
    newState.registerFailure = false;
    newState.loginSuccess = true;
    return newState;
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_GET_USER:
            return { ...state, fetching: true, error: null };
        case API_GET_USER_SUCCESS:
            return setUserInformations(state, action);
        case API_GET_USER_FAILURE:
            return { ...state, fetching: false, user: null, error: true };

        case API_USER_REGISTER:
            return { ...state, addingUser: true, registerFailure: null };
        case API_USER_REGISTER_SUCCESS:
            return { ...state, addingUser: false, registerFailure: false };
        case API_USER_REGISTER_FAILURE:
            return { ...state, addingUser: false, registerFailure: true};

        case API_USER_LOGIN:
            return { ...state, loggingIn: true, loginFailure: null };
        case API_USER_LOGIN_SUCCESS:
            return setUserID(state, action);
        case API_USER_LOGIN_FAILURE:
            return { ...state, loggingIn: false, userId: null, loginSuccess: false, loginFailure: true};
        default:
            return state;
    }
}