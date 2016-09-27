import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tournaments } from '../../Components/TournamentComponents';

const mapStateToProps = (state) => {
	return {
		courses: state.courses
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddCourse: ()=>{ dispatch(addCourse()) }
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Tournaments.TournamentTabComponent)