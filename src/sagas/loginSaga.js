import { put, takeEvery } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

export function* login(action) {
    const { data } = action.payload;
    yield put({ type: LOGIN_PENDING })
    try {
        yield put({ type: LOGIN_SUCCESS })
    }
    catch (error) {
        yield put({ type: LOGIN_FAILURE, error })
    }

}

export function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, login)
}
