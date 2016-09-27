import React, { Component } from 'react';
import {TextField, RaisedButton, DatePicker, MenuItem, SelectField} from 'material-ui';

export default class CreateTournament extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			value: 1
		}
	}

	handleChange(event, index, value){
		this.setState({
			value
		});
	}
// map for each course in courses props on fb database MenuItem component.
	render(){
		return(
				<div>
					<h1>Create Tournament</h1>
					<SelectField value={this.state.value} onChange={(e,i,v)=>this.handleChange(e,i,v)}>
						<MenuItem value={1} primaryText='Burstead'/>
						<MenuItem value={2} primaryText='Warley'/>
					</SelectField>
				</div>
			)
	}
}