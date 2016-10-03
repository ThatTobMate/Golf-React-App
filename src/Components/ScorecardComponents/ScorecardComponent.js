import React, { Component } from 'react';
import * as Colors from 'material-ui/styles/colors';
import {TextField, RaisedButton, DatePicker, FontIcon} from 'material-ui';
import SelectCourseComponent from './'

export class CreateScorecardComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			controlledDate: new Date()
		}
		this.handleChange.bind(this);
		this.handleSubmitScorecard.bind(this);
	};

	handleChange = (event, date) => {
		this.setState({
			controlledDate: date
		});
	};

	handleSubmitScorecard () {

	}

	handleSelectCourse = (courseId) => {
		debugger
		this.props.selectCourse(courseId)
	};


	render () {
		const {user, scorecard} = this.props;
		return (
			<div>
			{ scorecard.courseId ? 
				<ScorecardForm 
					controlledDate={this.state.controlledDate}
			 		submitScorecard={this.handleSubmitScorecard}
			 		handleChange={this.handleChange}
			 	/> 
			 	: 
			 	<CourseList
			 		selectCourse={this.handleSelectCourse}
			 	/>
			 }
			</div>
		)
	}
}

class CourseList extends Component {
	render () {
		const courses = [{id: 1, name: 'burstead'}, {id: 2, name: 'Test'}, {id: 3, name: 'Test2'}];
		return (
			<div>
				<ul>
				{courses.map((course) => (
					<li key={course.id} onClick={this.props.selectCourse(course.id)}>
						{course.name}
					</li>
				))}
				</ul>
			</div>
		)
	}
}

class ScorecardForm extends Component {
	render () {
		return (
			<div>
				<h1> Create Scorecard </h1>
				<TextField
					hintText='Title'
					floatingLabelText='Title'
					type='text'
					ref='title'
					defaultValue='Scorecard'
				/><br />
		    <DatePicker
		      hintText="Date"
		      floatingLabelText="Date"
		      type="text"
		      ref='date'
		      value={new Date(this.props.controlledDate)}
		      onChange={this.props.handleChange}
		    /><br />
		    <RaisedButton label="Create" primary={true} onClick={this.props.submitScorecard}/>
			</div>
		)
	}
}