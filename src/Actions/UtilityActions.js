import {UtilityConstants} from '../Constants/Constants';

export const openMenu = () => {
  return {
    type: UtilityConstants.OPEN_MENU,
    payload: {menu: {status: 'open'}}
  };
};



export const toggleMenu = () => {
  return (dispatch) => {
    dispatch(openMenu())
  }
}