import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import {logIn, logOut, checkForSession} from '../Actions/AuthActions';
import {LoginForm, LoginWelcome} from '../Components/LoginComponent';
import CircularProgress from 'material-ui/CircularProgress';

class LoginContainer extends Component {
  render() {
    const { user } = this.props;
    var html = user.user ? <LoginWelcome user={this.props.user} onLogOut={this.props.onLogOut} /> : <LoginForm onLogin={this.props.onLogin} />
    if (user.status === 'authenticating' && user.loading) html = <CircularProgress size={2} />
    return (
      <div>
        {html}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(logIn(email, password)),
    onLogOut: () => dispatch(logOut()),
    checkForSession: () => dispatch(checkForSession())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);