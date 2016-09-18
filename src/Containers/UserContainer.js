import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import { UserProfilePicture, UserDetailsComponent, UserTrophiesComponent, UserTournamentsComponent, UserTabs } from '../Components/UserComponent';
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
  },
  tournaments: {
    height: '20%',
    width: '90%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
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
          <UserTabs user={this.props.user} />
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