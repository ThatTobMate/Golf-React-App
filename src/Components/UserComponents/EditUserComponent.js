import React, { Component } from 'react';
import * as Colors from 'material-ui/styles/colors';
import {TextField, RaisedButton, DatePicker, FontIcon} from 'material-ui';
import { style } from '../../Themes/UserStyles';



export class EditUserComponent extends Component {
  handleClose() {
    this.props.onCancelUpdate();
  };

  handleOnSubmitUser() {
    let userData = {
      name: this.refs.name.input.value,
      DOB: this.refs.dob.state.date.toLocaleDateString()
    }
    this.props.onSubmitUser(userData)
  }

  render () {
    const { user } = this.props;
    return (
      <div>
        <h1> Update Details </h1>
        <FontIcon hoverColor={Colors.green500} style={style.close} className="material-icons" onClick={() => this.handleClose()}>close</FontIcon>
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          type="text"
          ref='name'
        /><br />
        <DatePicker
          hintText="Date of Birth"
          floatingLabelText="Date of Birth"
          type="text"
          ref='dob'
        /><br />
        <RaisedButton label="Save" primary={true} onClick={() => this.handleOnSubmitUser()} />
      </div>
    )
  }
}