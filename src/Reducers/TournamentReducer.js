import {TournamentConstants} from '../Constants/Constants';
const INITIAL_STATE = {}

export default function tournamentReducer(state=INITIAL_STATE, action){
	switch(action.type){
		case TournamentConstants.ADD_TOURNAMENT_ATTEMPT:
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}