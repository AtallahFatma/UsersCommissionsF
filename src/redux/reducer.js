// action types
import {
    API_GET_USER,
    API_GET_USER_SUCCESS,
    API_GET_USER_FAILURE
} from './ActionsTypes'

// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    user: null
};

const setUserInformations = (state, action) => {
    let newState = Object.assign({}, state);
    console.log('action',action);
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
            return { ...state, fetching: false, user: null, error: action.error };
        default:
            return state;
    }
}