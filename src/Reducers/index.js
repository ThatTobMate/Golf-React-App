import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import courseReducer from './CourseReducer';
import userReducer from './UserReducer';
import utilityReducer from './UtilityReducer';
import { routerReducer } from 'react-router-redux';
import tournamentReducer from './TournamentReducer';

const appReducer = combineReducers({
  authReducer,
  courseReducer,
  userReducer,
  utilityReducer,
  tournamentReducer,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGGED_OUT') {
    state = undefined
  }

  return appReducer(state, action);
};

export default rootReducer;