import React, { Component } from 'react';

export default class Open extends Component {
  render() {
    return(
      <div>
        <a
          href="https://github.com/Usheninte/github-highlights"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Open Source Code <i class="fab fa-github"></i></h4>
        </a>
        <a
          href="https://null-git.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Example Portfolio Project <i class="fas fa-laptop-code"></i></h4>
        </a>
        <hr />
      </div>
    );
  }
}