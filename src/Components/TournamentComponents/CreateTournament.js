import React, { Component } from 'react';
import {TextField, RaisedButton, DatePicker, MenuItem, SelectField, TimePicker} from 'material-ui';
import _ from 'underscore';
import {style} from '../../Themes/tournaments';

export default class CreateTournament extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			value: 0
		}
	}

	handleChange(event, index, value){
		this.setState({
			value
		});
	}

	createItems(courses){
		var arr = [];
		_.mapObject(courses, (course, index)=>{
							arr.push(<MenuItem value={index+1} key={index} primaryText={course.name} />)
						})
		return arr;
	}

	submitForm(){
		alert('Hola')
	}

// map for each course in courses props on fb database MenuItem component.
	render(){
		const { courses } = this.props
		return(
				<div style={style.createTournamentContainer}>
					<h1>Create Tournament</h1>
					<TextField floatingLabelText='Tournament Name'
										 ref='name' />
				  <br />
					<SelectField floatingLabelText='Course Name'
											 value={this.state.value}
											 onChange={(e,i,v)=>this.handleChange(e,i,v)} >
							<MenuItem key='unique' value={0} primaryText='Choose Course' />
							{this.createItems(courses)}
					</SelectField>
					<br />
					<DatePicker hintText='Date of Tournament'
											ref='date' />
					<br />
					<TimePicker hintText='Meeting Time'
											ref='time' />
				  <br />
				  <RaisedButton label='Create' primary={true} onClick={()=>{this.submitForm()}}/>
				</div>
			)
	}
}