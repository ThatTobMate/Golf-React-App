import {UserConstants} from '../Constants/Constants';
import * as firebase from 'firebase';
import _ from 'underscore';

export const fetchUser = () => {
  return {
    type: UserConstants.FETCH_USER
  };
};

export const fetchUserSuccess = (userData) => {
  return {
    type: UserConstants.FETCH_USER_SUCCESS,
    payload: {user: userData.user}
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: UserConstants.FETCH_USER_FAILURE,
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

export const fetchUserDetails = (userData) => {
  return {
    type: 'FETCH_USER_DETAILS',
    payload: Promise.all([
      getUserTrophies(userData),
      getUserTournaments(userData)
    ]).then(function(data){
      userData.trophies = _.map(data[0].val(), (value, index) => (
       _.omit(value, 'users') 
      ))
      userData.tournaments = _.map(data[1].val(), (value, index) => (
       _.omit(value, 'users') 
      ))
      return userData;
    })
  };
};

// export const fetchUserDetails = (userData) => {
//   return {
//     type: 'FETCH_USER_DETAILS',
//     payload: Promise.all([
//       getUserTrophies(userData),
//       getUserTournaments(userData)
//     ].map(Promise.all, Promise)).then(function(d){
//       debugger
//       userData.trophies = d[0].map(function(snapshot){
//         let trophy = _.omit(snapshot.val(), 'users');
//         return trophy;
//       });
//       userData.tournaments = d[1].map(function(snapshot){
//         let tournaments = _.omit(snapshot.val(), 'users');
//         return tournaments;
//       })
//       return userData;
//     })
//   };
// };

const getUserTrophies = (userData) => {
  let promise = firebase.database().ref('trophies')
                .orderByChild('users/' + userData.user.uid)
                .equalTo(true)
                .once('value')
  // let promises = [];
  // _.each(userData.user.trophies, function (value , id) {
  //   promises.push(firebase.database().ref('trophies/' + id).once('value'));
  // });
  // return promises;
  return promise;
};

const getUserTournaments = (userData) => {
  let promise = firebase.database().ref('tournaments')
                .orderByChild('users/' + userData.user.uid)
                .equalTo(true)
                .once('value')
  // let promises = [];
  // _.each(userData.user.tournaments, function (value , id) {
  //   promises.push(firebase.database().ref('tournaments/' + id).once('value'));
  // });
  // return promises;
  return promise;
};

export const getUserById = (userId) => {
  return (dispatch) => {
    dispatch(fetchUser());
    let userData = {};
    firebase.database().ref('users/' + userId).on('value', function (snapshot){
      userData.user = snapshot.val();
      userData.user.uid = userId;
      dispatch(fetchUserSuccess(userData));
      dispatch(fetchUserDetails(userData));
    }, function (error) {
      dispatch(fetchUserFailure(error));
    });
  };
};