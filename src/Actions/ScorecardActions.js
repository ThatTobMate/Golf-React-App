import { ScorecardConstants } from '../Constants/Constants';
import * as firebase from 'firebase';
import { push } from 'react-router-redux';


export const selectCourse = (courseId) => {
  return {
    type: ScorecardConstants.SELECT_COURSE,
    payload: courseId
  }
}