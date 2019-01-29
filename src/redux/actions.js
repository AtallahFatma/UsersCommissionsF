import {API_GET_USER} from './ActionsTypes'
/**
 * return the current user profile
 */
export function getProfile(id) {
    return {
        type: API_GET_USER,
        id: id
    };
}