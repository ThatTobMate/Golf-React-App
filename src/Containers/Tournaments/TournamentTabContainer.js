import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tournaments } from '../../Components/TournamentComponents';
import { fetchAllCourses } from '../../Actions/CourseActions';

const mapStateToProps = (state) => {
	return {
		courses: state.courseReducer.courses
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddCourse: (details) => dispatch(addCourse(details)),
		onInitialise: () => dispatch(fetchAllCourses())
	}
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Tournaments.TournamentTabComponent)