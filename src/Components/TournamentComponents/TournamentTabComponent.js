import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CreateTournament from './CreateTournament';
import AddCourseContainer from '../../Containers/AddCourseContainer';
import JoinTournament from './JoinTournament';


export default class TournamentTabComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: 'createTournament',
			showAddCourseForm: false
		}
	}

	componentWillMount(){
		this.props.onInitialise()
	}

	handleChange(){
		this.setState({
			value: value
		});
	};

	handleToggleAddNewCourse(){
		console.log(this.state.showAddCourseForm)
		this.setState({
			showAddCourseForm: !this.state.showAddCourseForm
		})
	}

	render(){
		const { tournaments, courses } = this.props;
		return(
			!this.state.showAddCourseForm
				?
					<Tabs>
						<Tab value={this.state.value} label='Create Tournament'>
							<CreateTournament courses={courses}
																onCreateTournament={this.props.onCreateTournament}
																tournaments={tournaments}
																onToggleAddNewCourse={()=>this.handleToggleAddNewCourse()}/>
						</Tab>
						<Tab value={this.state.value} label='Join Tournament'>
							<JoinTournament />
						</Tab>
					</Tabs>
				: 
					<AddCourseContainer />
		)
	}
}