import { ScorecardConstants } from '../Constants/Constants';

const INITIAL_STATE = {
  userId: null,
  courseId: null,
  date: null,
  finalScore: null,
  par: null,
  history: [],
  scores: [],
  error: null,
  loading: false,
  status: null
}

export default function scorecardReducer(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    case ScorecardConstants.ADD_SCORECARD : 
      return {
        ...state,
        loading: true,
        status: 'Creating new scorecard'
      };
    case ScorecardConstants.ADD_SCORECARD_SUCCES :
      return {
        ...state,
        user: state.user.uid,
        date: +new Date(),
        courseId: 'burstead',
        scores: action.payload.scores,
        par: action.payload.par,
        loading: false,
        status: 'Created a new scorecard'
      };
    case ScorecardConstants.ADD_SCORECARD_FAILURE :
      error = action.payload.user || {message: action.payload}
      return {
        ...state,
        loading: false,
        status: 'Scorecard creation failed',
        error: error
      };
    default :
      return state;
  };
};