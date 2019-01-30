import {API_GET_USER,
    API_USER_LOGIN,
    API_USER_REGISTER} from './ActionsTypes'

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
 * add user to dataBase
 */
export function addUser(data) {
    return {
        type: API_USER_REGISTER,
        params: data
    };
}

/**
 * return the current user profile
 */
export function userLogin(data) {
    return {
        type: API_USER_LOGIN,
        params: data
    };
}