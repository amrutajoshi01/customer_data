import { combineReducers } from 'redux';
import registerRedcuer from './registerReducer';
import uploadReducer from './uploadReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    register: registerRedcuer,
    upload: uploadReducer,
    login: loginReducer
})
export default rootReducer;