import React, { Component } from 'react';

import logo from '../../logo.svg';
import '../App.css';

const react = {
  width: "3em"
}

export default class Note extends Component {
  render() {
    return(
      <div>
        <h4>Coded with</h4>
        <img 
          src={logo} 
          style={react} 
          className="react" 
          alt="React.js" />
      </div>
    );
  }
}