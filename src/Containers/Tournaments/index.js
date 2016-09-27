import React, { Component } from 'react';
import HistoryContainer from './HistoryContainer';
import TournamentTabContainer from './TournamentTabContainer';
import {style} from '../../Themes/tournaments';

export default class Tournaments extends Component {
	render(){
		console.log('style',style)
		return (
			<div style={style.mainContainer}>
				<TournamentTabContainer style={style.tabContainer}/>
				<HistoryContainer />
			</div>
			)
	}
}