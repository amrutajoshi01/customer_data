export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"


export const registerRequest = (data) => {
    return {
        type: REGISTER_REQUEST,
        payload: { data }
    }
}

export const registerPending = () => {
    return {
        type: REGISTER_PENDING,
    }
}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: { data }
    }
}

export const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        error
    }
}