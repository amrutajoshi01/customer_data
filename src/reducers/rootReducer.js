import { combineReducers } from 'redux';
import registerRedcuer from './registerReducer';
import customerReducer from './customerReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    register: registerRedcuer,
    customer: customerReducer,
    login: loginReducer
})
export default rootReducer;