import { LOGIN_REQUEST, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/loginActions';

const initState = {
    loading: false,
    username: '',
    password: '',
    error: ''
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return {
                ...state,
                loading: false,
                error: ''
            }

        case LOGIN_PENDING:
            return {
                ...state,
                loading: true,
                error: ''
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                error: ''
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error
            }

        default: return state;
    }

}

export default loginReducer;