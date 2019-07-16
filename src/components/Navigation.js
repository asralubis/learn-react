// import React from 'react';
import React, { Component } from 'react';
// import RegisterForm from './register';

import '../style/navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo-nav">LOGO WEB</h2>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Sign In</a></li>
          <li><a href="/">Sign Up</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;