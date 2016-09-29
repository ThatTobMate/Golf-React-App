import {CoursesConstants} from '../Constants/Constants';
import * as firebase from 'firebase';

const addCourseAttempt = () => {
  return {
    type: CoursesConstants.ADD_COURSE
  }
}

const addCourseSuccess = () => {
  return {
    type: CoursesConstants.ADD_COURSE_SUCCESS
  }
}

const addCourseFailure = (err) => {
  return {
    type: CoursesConstants.ADD_COURSE_FAILURE,
    payload: err
  }
}

export const addCourse = (data) => {
  return (dispatch) => {
    dispatch(addCourseAttempt());
    const tournKey = firebase.database().ref('tournaments')
      .push(data)
      .then((data)=>{
        dispatch(addCourseSuccess());
      })
      .catch((err)=>{
        dispatch(addTournamentFailure(err.message));
      });
  }
}

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
  return (dispatch) => {
    const courses = firebase.database().ref('courses/').on('value',(snapshot)=>{
      dispatch(fetchAllCoursesSuccess(snapshot.val()))
    }, (err)=>{
      dispatch(fetchAllCoursesFailure(err))
    })
  }
};

export const fetchAllCoursesFailure = (err) => {
  return {
    type: CoursesConstants.FETCH_ALL_COURSES_FAILURE,
    payload: err
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