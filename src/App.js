import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {AuthConstants} from './Constants/Constants';
import {NavComponent} from './Components/NavComponent';
import {logOut} from './Actions/AuthActions';

class App extends Component {
  render() {
    const { children, history, user } = this.props;
    return (
      <div className="App">
        <NavComponent user={user} onLogOut={this.props.onLogOut}/>
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);