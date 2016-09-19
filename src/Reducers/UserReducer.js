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
  console.log(action.type, action.payload)
  switch (action.type) {
    case UserConstants.FETCH_USER :
      return {
        ...state,
        status: 'Fetching user data',
        loading: true
      };
    case UserConstants.FETCH_USER_SUCCESS :
      return {
        ...state,
        user: action.payload.user,
        status: 'Success: fetched user',
        error: null,
        loading: false
      };
    case UserConstants.FETCH_USER_FAILURE :
      error = action.payload;
      return {
        ...state,
        error: error,
        status: 'Failed: fetching user',
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
    case UserConstants.FETCH_USER_DETAILS_PENDING :
      return {
        ...state,
        status: 'Fetching user data',
        error: null,
        loading: true
      };
    case UserConstants.FETCH_USER_DETAILS_FULFILLED :
      return {
        ...state,
        trophies: action.payload.trophies,
        tournaments: action.payload.tournaments,
        friends: action.payload.friends,
        status: 'Success: fetched user data',
        error: null,
        loading: false
      };
    case UserConstants.FETCH_USER_DETAILS_REJECTED :
      error = action.payload;
      return {
        ...state,
        error: error,
        status: 'Failed: fetching user data',
        loading: false
      };
    case UserConstants.FETCH_USER_TROPHIES_SUCCESS :
      return {
        ...state,
        trophies: action.payload.val(),
        status: 'Success: fetched trophies',
        error: null
      }
    default :
      return state;
  }
}