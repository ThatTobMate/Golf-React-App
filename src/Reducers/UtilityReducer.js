import { UtilityConstants } from '../Constants/Constants';
const INITIAL_STATE = {forms: {updateUser: false, addCourse: false}};

export default function utilityReducer(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case UtilityConstants.OPEN_MENU :
      return {...state,
       menu: {open: true}
     };
    case UtilityConstants.UPDATE_USER_FORM :
      return {
        ...state,
        forms: {updateUser: action.payload}
      };
    case UtilityConstants.ADD_COURSE_FORM :
      return {
        ...state,
        forms: {addCourse: action.payload}
      }
    default :
      return state;
  }
}