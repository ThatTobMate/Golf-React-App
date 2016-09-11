import {UtilityConstants} from '../Constants/Constants';
const INITIAL_STATE = {menu: {open: false}};

export default function utilityReducer(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case UtilityConstants.OPEN_MENU :
      return {...state,
       menu: {open: true}
     };
    default :
      return state;
  }
}