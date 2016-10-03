import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scorecard from '../Components/ScorecardComponents';
import { selectCourse } from '../Actions/ScorecardActions';


export class ScorecardContainer extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
       	<Scorecard.CreateScorecardComponent user={this.props.user} scorecard={this.props.scorecard} selectCourse={this.props.selectCourse} course={this.props.course} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    scorecard: state.scorecardReducer,
    utility: state.utilityReducer,
    course: state.courseReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCourse: (courseId) => dispatch(selectCourse(courseId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScorecardContainer);