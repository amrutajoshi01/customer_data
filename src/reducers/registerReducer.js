import { REGISTER_REQUEST, REGISTER_PENDING, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/registerActions';

const initState = {
    loading: false,
    name: '',
    email: '',
    password: '',
    error: ''
}

const registerReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST: return state;

        case REGISTER_PENDING: return {
            ...state,
            loading: true
        }

        case REGISTER_SUCCESS:
            let data = action.data;
            return {
                ...state,
                name: data.name,
                email: data.email,
                password: data.password,
                loading: false
            }

        case REGISTER_FAILURE: return {
            ...state,
            error: action.error
        }

        default: return state;
    }

}

export default registerReducer;