import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuComponent from './MenuComponent';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import {logOut} from '../Actions/AuthActions';

export class NavComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {open: false};
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    handleLink = () => console.log('route change here');

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
          <MenuItem onTouchTap={this.handleLink.bind(this)}>Add Course</MenuItem>
        </Drawer>
      </div>
    );
  }
}