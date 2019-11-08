import { put, takeEvery, call } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

export function* login(action) {
    const { data } = action.payload;
    yield put({ type: LOGIN_PENDING })
    let url = 'http://35.223.127.220:8080/login'
    try {
        const response = yield call(fetch, "https://cors-anywhere.herokuapp.com/" + url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        let tokenObj = yield response.json();
        if (response.status === 200) {
            localStorage.setItem('user', tokenObj.token);
            yield put({ type: LOGIN_SUCCESS, token: tokenObj.token })
        }
    }
    catch (error) {
        yield put({ type: LOGIN_FAILURE, error })
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, login)
}
