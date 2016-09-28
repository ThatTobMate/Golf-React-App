import React, { Component } from 'react';
import {TextField, RaisedButton, DatePicker, MenuItem, SelectField, TimePicker} from 'material-ui';
import _ from 'underscore';
import {style} from '../../Themes/tournaments';

export default class CreateTournament extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			courseKey: 0,
			date: '',
			time: ''
		}
	}

	handleCourseChange(event, index, courseKey){
		this.setState({
			courseKey
		});
	}

	handleDateChange(event, date){
		date = date.toString();
		this.setState({
			date
		})
	}

	handleTimeChange(event, time){
		time = time.toString();
		this.setState({
			time
		})
	}
	createItems(courses){
		var arr = [];
		_.mapObject(courses, (course, index)=>{
							arr.push(<MenuItem value={index} key={index} primaryText={course.name} />)
						})
		return arr;
	}

	submitForm(){
		let data = {
			tournamentName: this.refs.name.input.value,
			courseKey: this.state.courseKey,
			date: this.state.date,
			time: this.state.time
		}
		this.props.onCreateTournament(data);
	}
	render(){
		const { courses } = this.props
		return(
				<div style={style.createTournamentContainer}>
					<h1>Create Tournament</h1>
					<TextField floatingLabelText='Tournament Name'
										 ref='name' />
				  <br />
					<SelectField floatingLabelText='Course Name'
											 value={this.state.courseKey}
											 onChange={(e,i,key)=>this.handleCourseChange(e,i,key)} >
							<MenuItem key='unique' value={0} primaryText='Choose Course' />
							{this.createItems(courses)}
					</SelectField>
					<br />
					<DatePicker floatingLabelText='Date of Tournament'
											hintText='Date of Tournament'
											ref='date'
											onChange={(e,date)=>this.handleDateChange(e, date)} />
					<br />
					<TimePicker floatingLabelText='Meeting Time'
											hintText='Meeting Time'
											ref='time'
											onChange={(e, time)=>this.handleTimeChange(e, time)} />
				  <br />
				  <RaisedButton label='Create' primary={true} onClick={()=>{this.submitForm()}}/>
				</div>
			)
	}
}