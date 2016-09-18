import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import courseReducer from './CourseReducer';
import userReducer from './UserReducer';
import utilityReducer from './UtilityReducer';
import { routerReducer } from 'react-router-redux';

const appReducer = combineReducers({
  authReducer,
  courseReducer,
  userReducer,
  utilityReducer,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGGED_OUT') {
    state = undefined
  }

  return appReducer(state, action);
};

export default rootReducer;