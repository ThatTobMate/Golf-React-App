import React, { Component } from 'react';
import HistoryContainer from './HistoryContainer';
import TournamentTabContainer from './TournamentTabContainer';

export default class Tournaments extends Component {
	render(){
		return (
			<div>
				<HistoryContainer />
				<TournamentTabContainer />
			</div>
			)
	}
}