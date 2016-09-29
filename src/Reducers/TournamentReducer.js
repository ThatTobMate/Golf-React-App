import {TournamentConstants} from '../Constants/Constants';
const INITIAL_STATE = {
	loading: false,
	createdTournament: false,
	error: ''
}

export default function tournamentReducer(state=INITIAL_STATE, action){
	switch(action.type){
		case TournamentConstants.ADD_TOURNAMENT_ATTEMPT:
			return {
				...state,
				loading: true
			}
		case TournamentConstants.ADD_TOURNAMENT_SUCCESS:
			return {
				...state,
				loading: false,
				createdTournament: true
			}
		case TournamentConstants.ADD_TOURNAMENT_FAILURE:
			return {
				...state,
				loading: false,
				createdTournament: false,
				error: action.payload.err
			}
		default:
			return state
	}
}