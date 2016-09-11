import {CoursesConstants} from '../Constants/Constants';
import * as firebase from 'firebase';

export const addCourse = () => {
  return {
    type: CoursesConstants.ADD_COURSE
  };
};

export const addCourseSuccess = (course) => {
  return {
    type: CoursesConstants.ADD_COURSE_SUCCESS,
    payload: course
  };
};

export const fetchCourse = () => {
  return {
    type: CoursesConstants.FETCH_COURSE
  };
};

export const fetchCourseSuccess = (course) => {
  return {
    type: CoursesConstants.FETCH_COURSE_SUCCESS,
    payload: course
  };
};

export const fetchAllCourses = () => {
  return {
    type: CoursesConstants.FETCH_ALL_COURSES
  };
};

export const fetchAllCoursesSuccess = (courses) => {
  return {
    type: CoursesConstants.FETCH_ALL_COURSES_SUCCESS,
    payload: courses
  };
};

export const submitCourse = (name, location, holeData) => {
  return (dispatch) => {
    const Courses = firebase.database().ref('Courses/');
    var newCourse = {name: name, location: location, Holes: holeData}
    dispatch(addCourse())
    Course.push(newCourse).then(function (snapshot) {
      debugger
    })
    .catch(function(err){
      console.log(err);
    });

  };
};

export const getCourse = (courseId) => {
  return (dispatch) => {

  };
};

export const getCourses = () => {
  return (dispatch) => {

  };
};