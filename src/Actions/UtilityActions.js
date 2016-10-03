import { UtilityConstants } from '../Constants/Constants';

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

export const openUserForm = () => {
  return {
    type: UtilityConstants.UPDATE_USER_FORM,
    payload: true
  };
};

export const closeUserForm = () => {
  return {
    type: UtilityConstants.UPDATE_USER_FORM,
    payload: false
  };
};

export const selectCourse = (courseId) => {
  return {
    type: UtilityConstants.SELECT_COURSE,
    payload: courseId
  }
}