import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../Components/UserComponents'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { containerStyle } from '../Themes/UserStyles';
import { openUserForm, closeUserForm } from '../Actions/UtilityActions';
import { submitUserDetailsUpdate } from '../Actions/UserActions';




class UserContainer extends Component {
  render () {
    const { user, utility } = this.props;
    var html = <div>
        <Paper style={containerStyle.profile} zDepth={3}>
          <User.ProfilePictureComponent user={this.props.user} />
        </Paper>
        <User.DetailsComponent user={this.props.user} onUpdateUser={this.props.onUpdateUser}/>
        <Paper style={containerStyle.trophies} zDepth={3}>
          <User.TabsComponent user={this.props.user} />
        </Paper>
      </div>
    if (!user.user) html = <CircularProgress size={2} />
    if (utility.forms.updateUser) html = <User.EditUserComponent user={this.props.user} onSubmitUser={this.props.onSubmitUser} onCancelUpdate={this.props.onCancelUpdate}/>
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
    user: state.userReducer,
    utility: state.utilityReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: () => dispatch(openUserForm()),
    onCancelUpdate: () => dispatch(closeUserForm()),
    onSubmitUser: () => dispatch(submitUserDetailsUpdate()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);