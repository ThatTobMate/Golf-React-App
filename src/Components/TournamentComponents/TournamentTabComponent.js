import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CreateTournament from './CreateTournament';
import JoinTournament from './JoinTournament';


export default class TournamentTabComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: 'createTournament'
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

	render(){
		const { tournaments, courses } = this.props;
		return(
			<Tabs>
				<Tab value={this.state.value} label='Create Tournament'>
					<CreateTournament courses={courses}
														onCreateTournament={this.props.onCreateTournament}/>
				</Tab>
				<Tab value={this.state.value} label='Join Tournament'>
					<JoinTournament />
				</Tab>
			</Tabs>
		)
	}
}