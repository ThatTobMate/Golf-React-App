import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../Components/UserComponents'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { containerStyle } from '../Themes/UserStyles';
import { openUserForm, closeUserForm } from '../Actions/UtilityActions';
import { submitUserDetailsUpdate } from '../Actions/UserActions';




class UserContainer extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { userData, utility } = this.props;
    var html = <div>
        <Paper style={containerStyle.profile} zDepth={3}>
          <User.ProfilePictureComponent user={userData.user} />
        </Paper>
        <User.DetailsComponent user={userData.user} onUpdateUser={this.props.onUpdateUser}/>
        <Paper style={containerStyle.trophies} zDepth={3}>
          <User.TabsComponent trophies={userData.trophies} tournaments={userData.tournaments} user={userData.user} />
        </Paper>
      </div>
    if (!userData.user) html = <CircularProgress size={2} />
    if (utility.forms.updateUser) html = <User.EditUserComponent user={userData.user} onSubmitUser={this.props.onSubmitUser} onCancelUpdate={this.props.onCancelUpdate}/>
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
    userData: state.userReducer,
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