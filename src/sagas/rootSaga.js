import { watchRegister } from './registerSaga';
import { watchLogin } from './loginSaga';
import { watchUpload, watchGetCustomers } from './customerSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        watchRegister(),
        watchLogin(),
        watchUpload(),
        watchGetCustomers()
    ])
}