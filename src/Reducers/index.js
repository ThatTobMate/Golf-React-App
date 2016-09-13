import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import courseReducer from './CourseReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  authReducer,
  courseReducer,
  userReducer
});

export default rootReducer;