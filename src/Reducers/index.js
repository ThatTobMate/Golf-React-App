import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import utilityReducer from './UtilityReducer';
import courseReducer from './CourseReducer';


const rootReducer = combineReducers({
  authReducer,
  courseReducer
});

export default rootReducer;