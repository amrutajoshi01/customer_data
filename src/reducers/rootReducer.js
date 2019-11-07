import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import registerRedcuer from './registerReducer';
import customerReducer from './customerReducer';
import loginReducer from './loginReducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    register: registerRedcuer,
    customer: customerReducer,
    login: loginReducer
})
export default rootReducer;