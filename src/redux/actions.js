import {API_GET_USER, API_USER_REGISTER} from './ActionsTypes'

/**
 * return the current user profile
 */
export function getProfile(id) {
    return {
        type: API_GET_USER,
        id: id
    };
}

/**
 * return the current user profile
 */
export function addUser(data) {
    return {
        type: API_USER_REGISTER,
        params: data
    };
}