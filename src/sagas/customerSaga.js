import { put, takeEvery, call } from 'redux-saga/effects'
import {
    UPLOAD_REQUEST, UPLOAD_PENDING, UPLOAD_SUCCESS, UPLOAD_FAILURE,
    GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_PENDING, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_FAILURE
} from '../actions/customerActions';

export function* upload(action) {
    const { data } = action.payload;
    let url = 'http://35.223.127.220:8080/customers';
    yield put({ type: UPLOAD_PENDING })

    try {
        let userToken = localStorage.getItem('user');
        const response = yield call(fetch, "https://cors-anywhere.herokuapp.com/" + url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Token: userToken
            }
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


export function* getCustomers() {
    yield put({ type: GET_CUSTOMERS_PENDING })

    try {
        let userToken = localStorage.getItem('user')
        const response = yield call(fetch, "https://cors-anywhere.herokuapp.com/" + "http://35.223.127.220:8080/customers",
            {
                headers: {
                    Token: userToken
                }
            });
        let customers = yield response.json();
        if (response.status === 200)
            yield put({ type: GET_CUSTOMERS_SUCCESS, customers })
    }
    catch (error) {
        yield put({ type: GET_CUSTOMERS_FAILURE, error })
    }
}

export function* watchGetCustomers() {
    yield takeEvery(GET_CUSTOMERS_REQUEST, getCustomers)
}
