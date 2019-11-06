import { UPLOAD_REQUEST, UPLOAD_PENDING, UPLOAD_SUCCESS, UPLOAD_FAILURE } from '../actions/uploadActions';

const initState = {
    loading: false
}

const uploadReducer = (state = initState, action) => {
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

        default: return state;
    }

}

export default uploadReducer;