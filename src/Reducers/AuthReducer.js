import {AuthConstants} from '../Constants/Constants';
const INITIAL_STATE = {user: null, status: null, error: null, loading: false};

export default function authReducer(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case AuthConstants.CREATE_USER :
      return {
        ...state,
        status: 'creating user',
        loading: true,
        error: null,
        user: null
      };
    case AuthConstants.CREATE_USER_SUCCESS :
      return {
        ...state,
        status: 'Success: user created',
        loading: false,
        error: null,
        user: action.payload.user
      };
    case AuthConstants.CREATE_USER_FAILURE :
      return {
        ...state,
        status: 'Failed: user not created',
        loading: false,
        error: action.payload,
        user: null
      };
    case AuthConstants.ATTEMPT_LOGIN :
      return {...state,
        status: 'authenticating',
        loading: true,
        error: null,
        user: null
      };
    case AuthConstants.LOGIN_SUCCESS :
      return {...state,
       user: action.payload.user,
       status: 'authenticated',
       loading: false,
       error: null
     };
    case AuthConstants.LOGIN_FAILURE :
      error = action.payload.user || {message: action.payload}
      return {...state,
        status: 'Authentication failed',
        loading: false,
        error: error,
        user: null
     };
    case AuthConstants.LOGGED_OUT :
      return {...state,
       user: null,
       status: null,
       error: null,
       loading: false
     };
    case AuthConstants.UPDATE_PROFILE :
      return {...state,
        status: 'Updating Profile',
        error: null,
        loading: true
      };
    case AuthConstants.UPDATE_PROFILE_SUCCESS :
      return {...state,
        user: action.payload.user,
        loading: false,
        status: 'Update profile successful',
        error: null
      };
    case AuthConstants.UPDATE_PROFILE_FAILURE :
      error = action.payload.user || {message: action.payload}
      return {...state,
        error: error,
        loading: false,
        status: 'Update profile failed'
      }

    default :
      return state;
  }
}