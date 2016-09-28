import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tournaments } from '../../Components/TournamentComponents';
import { fetchAllCourses, addCourse } from '../../Actions/CourseActions';
import { addTournament } from '../../Actions/TournamentActions';


const mapStateToProps = (state) => {
	return {
		courses: state.courseReducer.courses
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onCreateTournament: (data) => dispatch(addTournament(data)),
		onInitialise: () => dispatch(fetchAllCourses())
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Tournaments.TournamentTabComponent)