import React, { Component, PropTypes } from 'react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};


//  Show a list of courses, when I click on one expand the course to show extra details
//  Also save the selected course to the state.

export class SelectCourseComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedId = null
		};
	};

	render () {
		const { courses } = this.props
		return (
			<div style={styles.root}>
				{courses.map(this.renderCourses)}
			</div>
		)
	}

	renderCourses (course) {
		const { selectedId } = this.state;

		return (

		)
	}
	// onclick of item send dispatch action to set the selected
	handleSelectedCourse (id) {
		this.props.selectCourse(id)
	}
}

class ListItem extends Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
	};

	render () {
		const { course } = this.props;

		return (
			<div onClick={onToggle}>
				<div> I am a list item </div>
				{this.renderBody()}
			</div>
		)
	}

	renderBody () {
		const { isSelected } = this.props

		if (!isSelected) {
			return null
		}

		return <div> Course Details </div>
	}
}