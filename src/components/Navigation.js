import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import React, { Component } from 'react';
// import RegisterForm from './register';
// import '../style/navigation.css';


const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavLogo = styled.img`
height: 30px;
width: 30px;
margin-right: 10px;
`

const NavUnlist = styled.ul`
  list-style: none;
`

const NavList = styled.li`
  display: inline;
  padding-right: 20px;
  padding-left: 20px;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: blue;
`

const Navigation = () => {
  return (

    <NavContainer>
      <NavLogo src="/" alt="LOGO"></NavLogo>
      <NavUnlist>
        <NavList >
          <StyledLink to="/Home">Home</StyledLink>
        </NavList>

        <NavList>
          <StyledLink to="/About">About</StyledLink>
        </NavList>

        <NavList>
          <StyledLink to="/Sign Up">Sign Up</StyledLink>
        </NavList>

        <NavList >
          <StyledLink to="/Sign In">Sign In</StyledLink>
        </NavList>

      </ NavUnlist >
    </ NavContainer>

  )
}




export default Navigation;