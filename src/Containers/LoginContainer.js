import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut, checkForSession, addUser } from '../Actions/AuthActions';
import { Auth } from '../Components/AuthComponents';
import CircularProgress from 'material-ui/CircularProgress';

class LoginContainer extends Component {
  render() {
    const { user } = this.props;
    let html = user.user ? <Auth.LoginWelcome user={this.props.user} onLogOut={this.props.onLogOut} /> : <Auth.LoginForm onLogin={this.props.onLogin} onCreate={this.props.onCreate} />
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
    onCreate: (email, password) => dispatch(addUser(email, password)),
    checkForSession: () => dispatch(checkForSession())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

// React.createElement('div', {onLogout: this.props.onLogout, user: this.props.user}, 'LoginWelcome')