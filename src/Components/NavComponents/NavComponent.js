import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'


export class NavComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {open: false};
      this.handleLogOut.bind(this);
      this.navigateToUserProfile.bind(this);
      this.navigateToHome.bind(this);
      this.navigateToScorecards.bind(this);
    }
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    navigateToUserProfile = () => {this.context.router.push('/user/' + this.props.user.user.uid)}

    navigateToHome = () => {this.context.router.push('/')}

    navigateToScorecards = () => {this.context.router.push('/scorecard/history')}

    navigateToTournaments(){
      this.context.router.push('/tournaments')
    }


    handleLogOut = () => {
      this.props.onLogOut()
    }
    

  render() {
    return (
      <div>
        <AppBar
          title="Golfy"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>X</MenuItem>
          <MenuItem onTouchTap={this.navigateToHome}>Home</MenuItem>
          <MenuItem onTouchTap={this.navigateToUserProfile}>My Profile</MenuItem>
          <MenuItem onTouchTap={this.navigateToScorecards}>Scorecards</MenuItem>
          <MenuItem onTouchTap={()=>this.navigateToTournaments()}>Tournaments</MenuItem>
          <MenuItem onTouchTap={this.handleLogOut}>Log Out</MenuItem>
        </Drawer>
      </div>
    );
  }
}

NavComponent.contextTypes = {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object
}
