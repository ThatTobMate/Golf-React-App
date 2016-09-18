import React, { Component } from 'react';

export class UserDetailsComponent extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1> { user.user && user.user.name }</h1>
      </div>
    );
  };
};