import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import * as Colors from 'material-ui/styles/colors';


let style = {
  icon: {
    display: 'inline-block',
    cursor: 'pointer'
  },
  name: {
    display: 'inline-block',
    width: '50%'
  }
}

export class UserDetailsComponent extends Component {
  handleUpdate() {
    this.props.onUpdateUser();
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <h3 style={style.name}> { user.user && user.user.name }</h3>
        <FontIcon hoverColor={Colors.green500} className="material-icons" style={style.icon} onClick={() => this.handleUpdate()}>mode_edit</FontIcon>
        <p> { user.user && user.user.email }</p>
      </div>
    );
  };
};