import React, { Component } from 'react';

import '../App.css';

const footerStyle = {
  textAlign: "center",
  color: "#fff",
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
        <h5>nullthefirst <i style={blueBold} class="fas fa-code"></i> 2018</h5> 
      </div>
    );
  }
}
