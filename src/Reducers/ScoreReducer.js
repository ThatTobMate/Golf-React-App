import { ScoreConstants } from '../Constants/Constants';

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

export default function scoreReducer(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    case ScoreConstants.ADD_SCORE : 
      return {
        ...state,
        loading: true,
        status: 'Creating new score'
      };
    case ScoreConstants.ADD_SCORE_SUCCES :
      return {
        ...state,
        user: state.user.uid,
        date: +new Date(),
        courseId: 'burstead',
        scores: action.payload.scores,
        par: action.payload.par,
        loading: false,
        status: 'Created a new score'
      };
    case ScoreConstants.ADD_SCORE_FAILURE :
      error = action.payload.user || {message: action.payload}
      return {
        ...state,
        loading: false,
        status: 'Score creation failed',
        error: error
      };
    default :
      return state;
  };
};