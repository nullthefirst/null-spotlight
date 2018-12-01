import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Logo extends Component {
  render() {
    return(
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}