import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import {logIn, logOut} from '../Actions/AuthActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const containerStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};

export class LoginForm extends Component {
  render () {
    return (
      <div>
        <TextField
          hintText="Enter Email"
          floatingLabelText="Email"
          type="email"
          ref='email'
          inputStyle={containerStyle}
        /><br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
          ref='password'
          inputStyle={containerStyle}
        /><br />
        <RaisedButton label="Log In" primary={true} style={style} onClick={(event) => this.handleLogIn(event)} />
      </div>
    )
  }
  handleLogIn(event) {
    const email = this.refs.email.input.value;
    const password = this.refs.password.input.value;
    this.props.onLogin(email, password);
  }
}

export class LoginWelcome extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <h1>Logged In</h1>
        <RaisedButton label="Log Out" style={style} onClick={(event) => this.handleLogIn(event)} />
        <button onClick={(event) => this.handleLogOut(event)}>Log Out</button>
        <Link to={`/user/${user.user.uid}`}> Update Profile </Link>
      </div>
    )
  }
  handleLogOut(event) {
    this.props.onLogOut()
  }
}



