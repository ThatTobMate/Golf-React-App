// import {UserConstants, TestConst} from '../Constants/Constants';

// export default function userPromiseReducer (state = {}, action) {
//   let error;
//   debugger
//   switch (action.type) {
//     case 'FETCH_USER_DETAILS_PENDING' :
//       debugger
//       return {};
//     case 'FETCH_USER_DETAILS_FULFILLED' :
//       debugger
//       return {
//         user: action.payload.user,
//         trophies: action.payload.trophies,
//         tournaments: action.payload.tournaments,
//         friends: action.payload.friends,
//         status: 'Success: fetched user data',
//         error: null,
//         loading: false
//       };
//     case 'FETCH_USER_DETAILS_REJECTED' :
//       debugger
//       error = action.payload;
//       return {
//         ...state,
//         error: error,
//         status: 'Failed: fetching user data',
//         loading: false
//       };
//     default :
//       return state;
//   }
// }