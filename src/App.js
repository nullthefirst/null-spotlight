import React, { Component } from 'react';
import './components/App.css';

import Logo from './components/logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    );
  }
}

export default App;
