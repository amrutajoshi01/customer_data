import {
    UPLOAD_REQUEST, UPLOAD_PENDING, UPLOAD_SUCCESS, UPLOAD_FAILURE,
    GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_PENDING, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_FAILURE
} from '../actions/customerActions';

const initState = {
    loading: false,
    customers: [],
    error: ''
}

const customerReducer = (state = initState, action) => {
    switch (action.type) {
        case UPLOAD_REQUEST: return {
            ...state,
            loading: false
        }

        case UPLOAD_PENDING: return {
            ...state,
            loading: true
        }

        case UPLOAD_SUCCESS: return {
            ...state,
            loading: false
        }

        case UPLOAD_FAILURE: return {
            ...state,
            loading: false
        }

        case GET_CUSTOMERS_REQUEST: return {
            ...state,
            loading: false
        }

        case GET_CUSTOMERS_PENDING: return {
            ...state,
            loading: true
        }

        case GET_CUSTOMERS_SUCCESS: return {
            ...state,
            customers: action.customers,
            loading: false
        }

        case GET_CUSTOMERS_FAILURE: return {
            ...state,
            error: action.error,
            loading: false
        }


        default: return state;
    }

}

export default customerReducer;