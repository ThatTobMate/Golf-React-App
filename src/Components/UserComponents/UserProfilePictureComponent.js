import React, { Component } from 'react';
import { style } from '../../Themes/UserStyles';

export class UserProfilePictureComponent extends Component {
  render () {
    const { user } = this.props;
    var alt = 'http://img2.timeinc.net/people/i/2010/database/100816/tiger-woods-300.jpg';
    return (
      <img src={user.image || alt} style={{height: '100%', width: '100%'}}/>
    );
  };
};