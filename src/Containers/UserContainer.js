import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import { UserProfilePicture } from '../Components/UserComponent';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

const style = {
  height: 250,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class UserContainer extends Component {
  render () {
    const { user } = this.props;

    return (
      <div>
        <Paper style={style} zDepth={3}>
          <UserProfilePicture user={this.props.user} />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
    user: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (userData) => dispatch(updateUser(userData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);