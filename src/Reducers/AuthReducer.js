import {AuthConstants} from '../Constants/Constants';
const INITIAL_STATE = {user: null, status: null, error: null, loading: false};

export default function authReducer(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
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
    default :
      return state;
  }
}