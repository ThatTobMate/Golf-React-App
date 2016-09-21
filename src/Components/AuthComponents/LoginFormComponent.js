import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { style } from '../../Themes/LoginStyles';

export class LoginFormComponent extends Component {
  render () {
    return (
      <div>
        <TextField
          hintText="Enter Email"
          floatingLabelText="Email"
          type="email"
          ref='email'
          inputStyle={style.inputStyle}
        /><br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
          ref='password'
          inputStyle={style.inputStyle}
        /><br />
        <RaisedButton label="Log In" primary={true} style={style} onClick={(event) => this.handleForm('logIn')} />
        <RaisedButton label="Create Account" secondary={true} style={style} onClick={(event) => this.handleForm('create')} />

      </div>
    )
  }
  handleForm(type) {
    const email = this.refs.email.input.value;
    const password = this.refs.password.input.value;
    type === 'logIn' ? this.props.onLogin(email, password) : this.props.onCreate(email, password);
  }
}