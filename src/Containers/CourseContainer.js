import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import { AddCourseComponent } from '../Components/CourseComponent';
import { submitCourse } from '../Actions/CourseActions';


class CourseContainer extends Component {
  render() {
    const { user, course } = this.props;
    let html = user.user ? <AddCourseComponent submitCourse={this.props.submitCourse}/> : 'Hello'
    return (
      <div>
        {html}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer,
    course: state.courseReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitCourse: (name, location) => dispatch(submitCourse(name, location))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseContainer);