import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_GET_USER", getUserSaga);
}

// function that makes the api request and returns a Promise for response
function getUser() {
    return axios({
        method: "get",
        url: "http://127.0.0.1:8000/user/20"
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* getUserSaga() {
    try {
        const response = yield call(getUser);
        console.log('response',response);
        const user = response.data;

        // dispatch a success action to the store with the new dog
        yield put({ type: "API_GET_USER_SUCCESS", user });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_GET_USER_FAILURE", error });
    }
}