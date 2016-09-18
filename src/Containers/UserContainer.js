import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import {User} from '../Components/UserComponents'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { containerStyle } from '../Themes/UserStyles';




class UserContainer extends Component {
  render () {
    const { user } = this.props;
    var html = <div>
        <Paper style={containerStyle.profile} zDepth={3}>
          <User.ProfilePictureComponent user={this.props.user} />
        </Paper>
        <User.DetailsComponent user={this.props.user} />
        <Paper style={containerStyle.trophies} zDepth={3}>
          <User.TabsComponent user={this.props.user} />
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