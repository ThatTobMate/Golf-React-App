import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../Components/UserComponents'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { containerStyle } from '../Themes/UserStyles';
import { openUserForm, closeUserForm } from '../Actions/UtilityActions';
import { submitUserDetailsUpdate } from '../Actions/UserActions';

function ProfilePage (props) {
  return (
    <div>
      <Paper style={containerStyle.profile} zDepth={3}>
        <User.ProfilePictureComponent user={props.user} />
      </Paper>
      <User.DetailsComponent user={props.user} onUpdateUser={props.onUpdateUser}/>
      <Paper style={containerStyle.trophies} zDepth={3}>
        <User.TabsComponent user={props.user} />
      </Paper>
    </div>
  )
}


class UserContainer extends Component {
  constructor(props) {
    super(props);
  };
  render () {
    const { user, utility } = this.props;
    let html = user.user ? <ProfilePage user={user} onUpdateUser={this.props.onUpdateUser}/> : <CircularProgress size={2} />
    if (utility.forms.updateUser) html = <User.EditUserComponent user={user} onSubmitUser={this.props.onSubmitUser} onCancelUpdate={this.props.onCancelUpdate}/>
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
    onSubmitUser: (userData) => dispatch(submitUserDetailsUpdate(userData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);