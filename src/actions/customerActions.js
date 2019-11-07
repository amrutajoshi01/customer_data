export const UPLOAD_REQUEST = "UPLOAD_REQUEST";
export const UPLOAD_PENDING = "UPLOAD_PENDING";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_FAILURE = "UPLOAD_FAILURE";
export const GET_CUSTOMERS_REQUEST = "GET_CUSTOMERS_REQUEST";
export const GET_CUSTOMERS_PENDING = "GET_CUSTOMERS_PENDING";
export const GET_CUSTOMERS_SUCCESS = "GET_CUSTOMERS_SUCCESS";
export const GET_CUSTOMERS_FAILURE = "GET_CUSTOMERS_FAILURE";


export const uploadRequest = (data) => {
    return {
        type: UPLOAD_REQUEST,
        payload: { data }
    }
}

export const uploadPending = () => {
    return {
        type: UPLOAD_PENDING,
    }
}

export const uploadSuccess = () => {
    return {
        type: UPLOAD_SUCCESS,
    }
}

export const uploadFailure = () => {
    return {
        type: UPLOAD_FAILURE,
    }
}

export const getCustomersRequest = () => {
    return {
        type: GET_CUSTOMERS_REQUEST,
    }
}

export const getCustomersPending = () => {
    return {
        type: GET_CUSTOMERS_PENDING,
    }
}

export const getCustomersSuccess = (customers) => {
    return {
        type: GET_CUSTOMERS_SUCCESS,
        payload: { customers }
    }
}

export const getCustomersFailure = (error) => {
    return {
        type: GET_CUSTOMERS_FAILURE,
        error
    }
}