import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Tabs, Tab } from 'material-ui/Tabs';
import { style } from '../../Themes/UserStyles';
import { UserTrophiesComponent } from './UserTrophiesComponent';
import { UserTournamentsComponent } from './UserTournamentsComponent';

export class UserTabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'tournaments',
    };
  }

    handleChange = (value) => {
      this.setState({
        value: value,
      });
    };

    render() {
      const { user, tournaments, trophies } = this.props.user;
      return (
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Tournaments" value="tournaments"  >
            <div>
              { tournaments ? <UserTournamentsComponent  tournaments={tournaments} /> : <CircularProgress size={2} />}
            </div>
          </Tab>
          <Tab label="Trophies" value="trophies" >
            <div>
              { trophies ? <UserTrophiesComponent  trophies={trophies} /> : <CircularProgress size={2} />}
            </div>
          </Tab>
        </Tabs>
      );
    }
}
