import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import {update, logOut} from '../Actions/AuthActions';
import Paper from 'material-ui/Paper';

const style = {
  height: '100%',
  width: '100%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export class UserDetailsComponent extends Component {
  render() {
    console.log(this.props)
    const { user } = this.props;
    return (
      <div>
        <h1> { user.user && user.user.name || 'Tobias Hale' }</h1>
      </div>
    )
  }
};

export class UserProfilePicture extends Component {
  render () {
    const { user } = this.props;
    var alt = 'http://img2.timeinc.net/people/i/2010/database/100816/tiger-woods-300.jpg';
    return (
      <img src={user.image || alt} style={{height: '100%', width: '100%'}}/>
    )
  }
}
