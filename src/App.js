import React, { Component } from 'react';
import './components/App.css';

import Head from './components/views/head';
import Block from './components/views/block';
import Footer from './components/views/footer';
import Note from './components/views/note';

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Block />
        <Footer />
        <Note />
      </div>
    );
  }
}

export default App;
