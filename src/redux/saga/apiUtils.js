import {put} from 'redux-saga/effects';

const urlBack = "http://127.0.0.1:8000";

export const getApi = (url) => {
    const result = fetch(urlBack + url, {
        method: 'GET',
    }).then((response) => {
        return response;
    }).catch(error => {
        return error;
    });
    return result;
};

export const postApi = (url, body) => {
    let jsonBody = body ? JSON.stringify(body) : {};
    return fetch(urlBack + url, {
        method: 'POST',
        body: jsonBody,
    }).then((response) => {
        return response;
    }).catch(error => {
        return error;
    });
};

export function* parseApiResult(response, success, error) {
    const successAction = success.action;

    const errorAction = error ? error.action : '';
    switch (response.status) {
        case 404:
        case 400:
        case 409:
            yield put({ type: errorAction });
            break;
        case 200:
        case 201:
        case 204:
            if (successAction) {
                try {
                    const payload = yield response.json();
                    yield put({
                        type: successAction,
                        payload: payload,
                    });
                } catch (exception) {
                    yield put({
                        type: successAction,
                        payload: {},
                    });
                }
            }
            //successRoute ? yield put(RouterActions.changeRoute(successRoute)) : '';
            break;
        default:
            console.log('default');
    }
    return {response: response, success: success, error: error};
};
