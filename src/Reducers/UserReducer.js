import {UserConstants} from '../Constants/Constants';

const INITIAL_STATE = {
  user: null,
  trophies: null,
  tournaments: null,
  friends: null,
  error: null,
  status: null,
  loading: false
};

export default function userReducer (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case UserConstants.FETCH_USER_DETAILS :
      return {
        ...state,
        status: 'Fetching user data',
        loading: true
      };
    case UserConstants.FETCH_USER_DETAILS_SUCCESS :
      return {
        ...state,
        user: action.payload.user,
        trophies: action.payload.trophies,
        tournaments: action.payload.tournaments,
        friends: action.payload.friends,
        status: 'Success: fetched user data',
        error: null,
        loading: false
      };
    case UserConstants.FETCH_USER_DETAILS_FAILURE :
      error = action.payload;
      return {
        ...state,
        error: error,
        status: 'Failed: fetching user data',
        loading: false
      };
    case UserConstants.UPDATE_USER_DETAILS :
      return {
        ...state,
        error: null,
        status: 'Updating user details',
        loading: true
      };
    case UserConstants.UPDATE_USER_DETAILS_SUCCESS :
      return {
        ...state,
        user: action.payload.user,
        trophies: action.payload.trophies,
        tournaments: action.payload.tournaments,
        friends: action.payload.friends,
        status: 'Success: updated user data',
        error: null,
        loading: false
      };
    case UserConstants.UPDATE_USER_DETAILS_FAILURE :
      error = action.payload;
      return {
        ...state,
        status: 'Failed: updating user data',
        error: error,
        loading: false
      };
    default :
      return state;
  }
}