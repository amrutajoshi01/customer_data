import { put, takeEvery, call } from 'redux-saga/effects'
import { REGISTER_REQUEST, REGISTER_PENDING, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/registerActions';



export function* register(action) {
    const { data } = action.payload;
    console.log(JSON.stringify(data));
    let url = 'http://35.223.127.220:8080/register'

    yield put({ type: REGISTER_PENDING })
    try {
        const response = yield call(fetch, "https://cors-anywhere.herokuapp.com/" + url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        yield put({ type: REGISTER_SUCCESS, data })
    }
    catch (error) {
        yield put({ type: REGISTER_FAILURE })
    }

}

export function* watchRegister() {
    yield takeEvery(REGISTER_REQUEST, register)
}
