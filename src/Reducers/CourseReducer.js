import {CoursesConstants} from '../Constants/Constants';
var holes = [];
for(var i = 0; i < 18; i++) {
  holes.push({courseId: null, hole: i + 1, par: null, strokeIndex: null})
}
const INITIAL_STATE = {
  course: {
    name: null,
    location: null,
    holes: holes
  }, 
  courseList: null,
  status: null,
  error: null,
  loading: false
};

export default function courseReducer(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    case CoursesConstants.ADD_COURSE :
      return {...state,
              status: 'Adding Course',
              loading: true
      };
    case CoursesConstants.ADD_COURSE_SUCCESSFUL :
      return {...state,
              course: action.payload,
              status: 'Successfully added course',
              loading: false
      };
    case CoursesConstants.ADD_COURSE_FAILURE :
      error = action.payload.course || {message: action.payload}
      return {...state,
              error: error,
              status: 'Failed adding course',
              loading: false
      }
    case CoursesConstants.FETCH_ALL_COURSES :
      return {...state,
              status: 'Fetching Courses',
              loading: true
      };
    case CoursesConstants.FETCH_ALL_COURSES_SUCCESSFUL :
      return {...state,
              courses: action.payload,
              status: 'Successfully added course',
              loading: false
      };
    case CoursesConstants.FETCH_ALL_COURSES_FAILURE :
      error = action.payload.course || {message: action.payload}
      return {...state,
              error: error,
              status: 'Failed fetching courses',
              loading: false
      };
    case CoursesConstants.FETCH_COURSE :
      return {...state,
              status: 'Fetching Course',
              loading: true
      };
    case CoursesConstants.FETCH_COURSE_SUCCESSFUL :
      return {...state,
              course: action.payload,
              status: 'Successfully fetched course',
              loading: false
      };
    case CoursesConstants.FETCH_COURSE_FAILURE :
      error = action.payload.course || {message: action.payload}
      return {...state,
              error: error,
              status: 'Failed fetching course',
              loading: false
      };
    default : 
     return state;
  }
}