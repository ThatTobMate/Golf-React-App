import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuComponent from './MenuComponent';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'


export class NavComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {open: false};
    }
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    navigateToUserProfile = () => {this.context.router.push('/user/' + this.props.user.user.uid)}

    navigateToHome = () => {this.context.router.push('/')}

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
          <MenuItem onTouchTap={this.handleLogOut.bind(this)}>Log Out</MenuItem>
          <MenuItem onTouchTap={this.navigateToUserProfile.bind(this)}>My Profile</MenuItem>
          <MenuItem onTouchTap={this.navigateToHome.bind(this)}>Home</MenuItem>
        </Drawer>
      </div>
    );
  }
}

NavComponent.contextTypes = {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object
}
