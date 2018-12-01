import React, { Component } from 'react';

import One from './git/one';
import Two from './git/two';
import Three from './git/three';
import Four from './git/four';
import Five from './git/five';

export default class Block extends Component {
  render() {
    return(
      <div>
        <One />
        <Two />
        <Three />
        <Four />
        <Five />

        <a href="https://poetrique.github.io/" alt="https://poetrique.github.io/"><h4>Poetrique Online <i class="em em-link"></i></h4></a>
        <p>Poetrique is a creative arts brand, that focuses on creating unique user experiences and interactions for the web. We are the bridge between technology and art. We work with world-class technology to produce amazing results.</p>

        <hr />
        <hr />
      </div>
    );
  }
}