import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import HomeGuideComponent from '../HomeGuideComponent';
import { style } from '../../Themes/LoginStyles';

export class LoginWelcomeComponent extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <h1>Logged In</h1>
        <RaisedButton label="Log Out" secondary={true} style={style} onClick={(event) => this.handleLogOut(event)} />
        <Link to={`/user/${user.user.uid}`}> Update Profile </Link>
        <HomeGuideComponent/>
      </div>
    )
  }
  handleLogOut(event) {
    this.props.onLogOut()
  }
}
