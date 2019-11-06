import { put, takeEvery, call } from 'redux-saga/effects'
import { UPLOAD_REQUEST, UPLOAD_PENDING, UPLOAD_SUCCESS, UPLOAD_FAILURE } from '../actions/uploadActions';

export function* upload(action) {
    const { data } = action.payload;
    yield put({ type: UPLOAD_PENDING })
    const formData = new FormData();
    formData.append('customerDetails', data[0]);
    try {

        const response = yield call(fetch, '', {
            method: 'POST',
            body: formData,
        });
        const result = yield response.json();
        yield put({ type: UPLOAD_SUCCESS })
    }
    catch (error) {
        yield put({ type: UPLOAD_FAILURE, error })
    }
}

export function* watchUpload() {
    yield takeEvery(UPLOAD_REQUEST, upload)
}
