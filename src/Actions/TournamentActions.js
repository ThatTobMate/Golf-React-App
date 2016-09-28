import { TournamentConstants } from '../Constants/Constants';

const addTournamentAttempt = () => {
	return {
		type: TournamentConstants.ADD_TOURNAMENT_ATTEMPT
	}
}

export const addTournament = (data) => {
	return (dispatch) => {
		dispatch(addTournamentAttempt())
	}
}