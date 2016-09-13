import {UserConstants} from '../Constants/Constants';
import * as firebase from 'firebase';

export const fetchUserDetails = () => {
  return {
    type: UserConstants.FETCH_USER_DETAILS
  };
};

export const fetchUserDetailsSuccess = (userData) => {
  debugger
  return {
    type: UserConstants.FETCH_USER_DETAILS_SUCCESS,
    payload: {user: userData.user, tournaments: userData.pets}
  };
};

export const fetchUserDetailsFailure = (error) => {
  return {
    type: UserConstants.FETCH_USER_DETAILS_FAILURE,
    payload: error
  };
};

export const updateUserDetails = () => {
  return {
    type: UserConstants.UPDATE_USER_DETAILS
  };
};

export const updateUserDetailsSuccess = (userData) => {
  return {
    type: UserConstants.UPDATE_USER_DETAILS_SUCCESS,
    payload: userData
  };
};

export const updateUserDetailsFailure = (error) => {
  return {
    type: UserConstants.UPDATE_USER_DETAILS_FAILURE,
    payload: error
  };
};

export const submitUserDetails = (userData) => {
  return (dispatch) => {

  };
};

const getPromiseData = (userData) => {
  Promise.all([getUserPets(userData), getPets(userData)]).then(function(results) {
    debugger
    // dispatch(fetchUserDetailsSuccess(userData));
  })
}

const getUserPets = (userData) => {
  return firebase.database().ref('pets/' + userData.user.petId).on('value')
}

const getPets = (userData) => {
  return firebase.database().ref('pets').on('value')
}

export const getUserById = (userId) => {
  return (dispatch) => {
    dispatch(fetchUserDetails());
    let userData = {};

    firebase.database().ref('users/' + userId).on('value', function(snapshot){
      userData.user = snapshot.val();
      getPromiseData(userData);
    }, function (error) {
      dispatch(fetchUserDetailsFailure(error));
    });
  }
}