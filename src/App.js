import React, { Component } from 'react';
import './components/App.css';

import Head from './components/views/head';
import Block from './components/views/block';

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Block />
      </div>
    );
  }
}

export default App;
