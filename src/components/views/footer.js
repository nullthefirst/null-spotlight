import React, { Component } from 'react';

import '../App.css';

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  marginTop: "4em"
}

const blueBold_underWhite = {
  color: "#61dafb",
  fontStyle: "bold",
  textDecoration: "underline",
  textDecorationColor: "#f0f0f0"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h4>nullthefirst <i class="fas fa-code"></i> 2018</h4> 
      </div>
    );
  }
}
