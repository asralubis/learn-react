import React, { Component } from 'react';

import Background from './img/headImg.jpg';

import '../style/header.css';


const myStyles = {
 backgroundImage: `url( ${Background})`,
 height: '80vh',
 backgroundSize: 'cover'

}



class Header extends Component {
 render() {
  return (

   <header style={myStyles}>
    <h1>{this.props.title}</h1>

   </header>

  );
 }
};

export default Header;