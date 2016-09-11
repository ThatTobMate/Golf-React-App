import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import {logIn, logOut} from '../Actions/AuthActions';

class UserComponent extends Component {
  render() {
    console.log(this.props)
    const { user } = this.props;
    return (
      <div>
        <h1>User Page: {user.user.email}</h1>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.authReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(logIn(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);