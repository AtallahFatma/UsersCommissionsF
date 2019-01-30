import {takeEvery,all, call,  } from "redux-saga/effects";
import {
    API_GET_USER,
    API_GET_USER_FAILURE,
    API_GET_USER_SUCCESS, API_USER_LOGIN,
    API_USER_LOGIN_FAILURE,
    API_USER_LOGIN_SUCCESS,
    API_USER_REGISTER,
    API_USER_REGISTER_FAILURE,
    API_USER_REGISTER_SUCCESS
} from "../ActionsTypes";
import * as ApiUtils from './apiUtils';

// worker saga: makes the api call when watcher saga sees the action
function* getUserSaga() {
    const url = "/user/50";
    const response = yield call(ApiUtils.getApi, url);
    yield call(ApiUtils.parseApiResult, response, {
        action: API_GET_USER_SUCCESS,
        payload: response.data,
    }, {
        action: API_GET_USER_FAILURE,
    });

}

function* addUserSaga(params) {
    const url = "/user/register";
    const body = params['params'];
    const response = yield call(ApiUtils.postApi, url, body);
    yield call(ApiUtils.parseApiResult, response, {
        action: API_USER_REGISTER_SUCCESS,
        payload: response.data
    }, {
        action: API_USER_REGISTER_FAILURE,
    });
}

function* userLoginSaga(params) {
    const url = "/user/login";
    const body = params['params'];
    const response = yield call(ApiUtils.postApi, url, body);
    yield call(ApiUtils.parseApiResult, response, {
        action: API_USER_LOGIN_SUCCESS,
        payload: response.data
    }, {
        action: API_USER_LOGIN_FAILURE,
    });
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherGetUser() {
    yield takeEvery(API_GET_USER, getUserSaga);
}

function* watcherRegister() {
    yield takeEvery(API_USER_REGISTER, addUserSaga);
}

function* watcherLogin() {
    yield takeEvery(API_USER_LOGIN, userLoginSaga);
}

export default function* rootSaga() {
    yield all([
        watcherGetUser(),
        watcherRegister(),
        watcherLogin()
    ])
}