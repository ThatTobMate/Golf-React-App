import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scorecard from '../Components/ScorecardComponents';

class ScorecardContainer extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Scorecard.HistoryComponent />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    scorecard: state.scorecardReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScorecardContainer);