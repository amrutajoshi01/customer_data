import { LOGIN_REQUEST, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

const initState = {
    loading: false,
    username: '',
    password: '',
    success: false,
    error: ''
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return {
                ...state,
                loading: false
            }

        case LOGIN_PENDING:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default: return state;
    }

}

export default loginReducer;