import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tournaments } from '../../Components/TournamentComponents';

const mapStateToProps = (state) => {
	return {
		tournaments: state.userReducer.tournaments
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddCourse: () => dispatch(addCourse())
	};
};

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Tournaments.HistoryComponent)