import {AuthConstants, UserConstants} from '../Constants/Constants';
import { getUserById } from './UserActions';
import * as firebase from 'firebase';
import { push } from 'react-router-redux';

export const createUser = () => {
  return {
    type: AuthConstants.CREATE_USER
  };
};

export const createUserSuccess = (userData) => {
  return {
    type: AuthConstants.CREATE_USER_SUCCESS,
    payload: {user: userData}
  };
};

export const createUserFailure = (error) => {
  return {
    type: AuthConstants.CREATE_USER_FAILURE,
    payload: {
      status: error,
      statusText: error
    }
  };
};

export const loginFailure = (error) => {
  return {
    type: AuthConstants.LOGIN_FAILURE,
    payload: {
      status: error,
      statusText: error
    }
  };
};

export const loginRequest = () => {
  return {
    type: AuthConstants.ATTEMPT_LOGIN
  };
};

export const loginSuccess = (user) => {
  return {
    type: AuthConstants.LOGIN_SUCCESS,
    payload: {user: user} || ''
  };
};

export const loggedOut = () => {
  return {
    type: AuthConstants.LOGGED_OUT
  };
};

export const checkForSession = () => {
  return (dispatch) => {
    dispatch(loginRequest())
    firebase.auth().onAuthStateChanged(function(userData) {
      if (userData) {
        var user = {email: userData.email, uid: userData.uid};
        localStorage.setItem('uid', user.uid);
        dispatch(loginSuccess(user));
        dispatch(getUserById(user.uid));
      } else {
        var error = {message: 'No session available'};
        localStorage.removeItem('uid');
        dispatch(loginFailure(error));
      }
    })
  }
}

export const logIn = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest())
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userData) {
      var user = {email: userData.email, uid: userData.uid};
      localStorage.setItem('uid', user.uid);
      dispatch(loginSuccess(user));
      dispatch(getUserById(user.uid));
    })
    .catch(function (err) {
      dispatch(loginFailure(err));
    });
  }
}

export const logOut = () => {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(function (data) {
      console.log(data)
      localStorage.removeItem('uid');
      dispatch(loggedOut())
      dispatch(push('/'))
    })
  }
}

export const addUser = (email, password) => {
  return (dispatch) => {
    dispatch(createUser());
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (userData) {
      let user = {email: userData.email, uid: userData.uid};
      dispatch(createUserSuccess(user));
      firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        id: user.uid
      }).then(function (data) {
        dispatch(checkForSession());
      });
    })
    .catch(function (err) {
      dispatch(createUserFailure(err));
    });
  }
}