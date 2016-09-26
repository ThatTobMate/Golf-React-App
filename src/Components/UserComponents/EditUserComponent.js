import React, { Component } from 'react';
import * as Colors from 'material-ui/styles/colors';
import {TextField, RaisedButton, DatePicker, FontIcon} from 'material-ui';
import { style } from '../../Themes/UserStyles';


export class EditUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: this.props.user.DOB
    };
  };

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date
    });
  };

  handleClose() {
    this.props.onCancelUpdate();
  };

  handleOnSubmitUser() {
    let user = {
      name: this.refs.name.input.value,
      DOB: this.refs.dob.state.date
    };
    this.props.onSubmitUser(user);
  };

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
          defaultValue={user.name}
        /><br />
        <DatePicker
          hintText="Date of Birth"
          floatingLabelText="Date of Birth"
          type="text"
          ref='dob'
          value={new Date(this.state.controlledDate)}
          onChange={this.handleChange}
        /><br />
        <RaisedButton label="Save" primary={true} onClick={() => this.handleOnSubmitUser()} />
      </div>
    )
  };
};

EditUserComponent.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    DOB: React.PropTypes.string.isRequired
  })
};