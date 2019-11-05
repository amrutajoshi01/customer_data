import { put, takeEvery, call } from 'redux-saga/effects'
import { REGISTER_REQUEST, REGISTER_PENDING, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/registerActions';



export function* register(action) {
    const { data } = action.payload;
    let url = ''

    yield put({ type: REGISTER_PENDING })
    try {
        yield put({ type: REGISTER_SUCCESS, data })
    }
    catch (error) {
        yield put({ type: REGISTER_FAILURE })
    }

}

export function* watchRegister() {
    yield takeEvery(REGISTER_REQUEST, register)
}
