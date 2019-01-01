import React, { Component } from 'react';

const footerStyle = {
  textAlign: "center",
  marginTop: "4em"
}

const blueBold = {
  color: "#61dafb",
  fontStyle: "bold"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <a
          href="https://github.com/Usheninte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>nullthefirst <i style={blueBold} class="fas fa-code"></i> 2018 - 2019</h5> 
        </a>
      </div>
    );
  }
}
