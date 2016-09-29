import { TournamentConstants } from '../Constants/Constants';
import * as firebase from 'firebase';
import _ from 'underscore';

const addTournamentAttempt = () => {
	return {
		type: TournamentConstants.ADD_TOURNAMENT_ATTEMPT
	}
}

const addTournamentSuccess = () => {
	return {
		type: TournamentConstants.ADD_TOURNAMENT_SUCCESS
	}
}

const addTournamentFailure = (err) => {
	return {
		type: TournamentConstants.ADD_TOURNAMENT_FAILURE,
		payload: err
	}
}

export const addTournament = (data) => {
	return (dispatch) => {
		dispatch(addTournamentAttempt());
		const tournKey = firebase.database().ref('tournaments')
			.push(data)
			.then((data)=>{
				console.log(data)
				dispatch(addTournamentSuccess());
			})
			.catch((err)=>{
				dispatch(addTournamentFailure(err.message));
			});
	}
}