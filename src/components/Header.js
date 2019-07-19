import React from 'react';
import styled from 'styled-components';

// import '../style/header.css';


const MyStyles = styled.div`
 /* background-image: url("./img/HeadImg.jpg"); */
 height: 80vh;
 width: 1000px;
 background-size: cover;
`


const Header = () => {
 return (
  <MyStyles
   src={require('./img/HeadImg.jpg')} alt="HEADEEEEEEER" > fottttoooooo
  </MyStyles>

 )
}

export default Header;