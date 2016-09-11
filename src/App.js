import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AuthConstants} from './Constants/Constants';
import {NavComponent} from './Components/NavComponent';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <NavComponent />
        {children}
      </div>
    );
  }
}

export default App;