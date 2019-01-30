// action types
import {
    API_GET_USER,
    API_GET_USER_SUCCESS,
    API_GET_USER_FAILURE,
    API_USER_REGISTER,
    API_USER_REGISTER_SUCCESS,
    API_USER_REGISTER_FAILURE
} from './ActionsTypes'

// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    user: null,
    registerFailure: null,
    addingUser: false
};

const setUserInformations = (state, action) => {
    let newState = Object.assign({}, state);
    newState.user = action.user;
    newState.fetching = false;
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
        default:
            return state;
    }
}