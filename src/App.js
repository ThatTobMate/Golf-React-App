import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {AuthConstants} from './Constants/Constants';
import {NavComponent} from './Components/NavComponent';

class App extends Component {
  render() {
    const { children, history, user } = this.props;
    return (
      <div className="App">
        <NavComponent user={user}/>
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

export default connect(
  mapStateToProps
)(App);