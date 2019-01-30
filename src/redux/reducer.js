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
    API_USER_LOGIN_FAILURE, API_GET_COMMISSIONS, API_GET_COMMISSIONS_SUCCESS, API_GET_COMMISSIONS_FAILURE
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
    commissions: null
};

// set user information if user/{userId} called
const setUserInformations = (state, action) => {
    let newState = Object.assign({}, state);
    newState.user = action.payload;
    newState.fetching = false;
    return newState;
};

// set user commissions
const setCommissions = (state, action) => {
    let newState = Object.assign({}, state);
    newState.commissions = action.payload;
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

        case API_GET_COMMISSIONS:
            return { ...state, commissions: null };
        case API_GET_COMMISSIONS_SUCCESS:
            return setCommissions(state, action);
        case API_GET_COMMISSIONS_FAILURE:
            return { ...state, commissions: null};
        default:
            return state;
    }
}