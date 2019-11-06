export const UPLOAD_REQUEST = "UPLOAD_REQUEST";
export const UPLOAD_PENDING = "UPLOAD_PENDING";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS"
export const UPLOAD_FAILURE = "UPLOAD_FAILURE"


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