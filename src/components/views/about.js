import React, { Component } from 'react';

import '../App.css';

const title = {
  color: "#31acce"
}

const round = {
  width: "10em",
  borderRadius: "50%"
}

export default class About extends Component {
  render() {
    return(
      <div>
        <h2 style={title}>About Me</h2>
        <img style={round} src={'https://res.cloudinary.com/poetrique/image/upload/c_scale,h_500,w_500/v1543688520/miscellaneous/placeholder.png'} alt="Coder Image" title="Coder Profile" />
        <p className="message">Elementum sagittis vitae et leo. Non tellus orci ac auctor augue mauris augue neque gravida. Turpis egestas integer eget aliquet nibh. Risus quis varius quam quisque id diam. Lorem mollis aliquam ut porttitor leo a. Turpis egestas sed tempus urna et pharetra pharetra massa.</p>
        <p className="message">Orci eu lobortis elementum nibh tellus molestie nunc non. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Non nisi est sit amet. Facilisis magna etiam tempor orci eu lobortis. Orci sagittis eu volutpat odio .</p>
      </div>
    );
  }
}