export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload: { data }
    }
}

export const loginPending = () => {
    return {
        type: LOGIN_PENDING,
    }
}

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
}