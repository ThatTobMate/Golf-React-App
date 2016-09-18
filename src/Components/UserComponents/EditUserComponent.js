import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import * as Colors from 'material-ui/styles/colors';


export class EditUserComponent extends Component {
  handleClose() {
    this.props.onCancelUpdate();
  };

  render () {
    const { user } = this.props;
    return (
      <div>
        <h1> HELLO </h1>
        <FontIcon hoverColor={Colors.green500} className="material-icons" onClick={() => this.handleClose()}>close</FontIcon>
      </div>
    )
  }
}