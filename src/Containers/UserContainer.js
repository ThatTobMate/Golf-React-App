import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import { UserProfilePicture, UserDetailsComponent, UserTrophiesComponent } from '../Components/UserComponent';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

const style = {
  profile: {
    height: 250,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  trophies: {
    height: '20%',
    width: '90%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
};

class UserContainer extends Component {
  render () {
    const { user } = this.props;
    var html = <div>
        <Paper style={style.profile} zDepth={3}>
          <UserProfilePicture user={this.props.user} />
        </Paper>
        <UserDetailsComponent user={this.props.user} />
        <Paper style={style.trophies} zDepth={3}>
          { user.trophies ? <UserTrophiesComponent user={this.props.user} /> : <CircularProgress size={2} />}
        </Paper>
      </div>
    if (!user.user) html = <CircularProgress size={2} />
    return (
      <div>
        {html}
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