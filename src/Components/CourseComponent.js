import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';

export class AddCourseComponent extends Component {
  render () {
    return (
      <div>
       <TextField
         hintText="Course Name"
         floatingLabelText="Course Name"
         type="text"
         ref='name'
       /><br />
       <TextField
         hintText="Location"
         floatingLabelText="Location"
         type="text"
         ref='location'
       /><br />
       <RaisedButton label="Add Course" primary={true} onClick={(event) => this.handleClick(event)} />

        <Table
        >
          <TableHeader
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
          >
              <TableRow >
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>3</TableRowColumn>
              </TableRow>
          </TableBody>
          <TableFooter
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  }
  handleClick = (event) => {
    var courseName = this.refs.name.input.value;
    var location = this.refs.location.input.value;
    this.props.submitCourse(courseName, location);
  }
}