import React from 'react';
import Lottie from 'react-lottie';
import { NavLink, NavNavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


import * as computerData from '../assets/icons/computer.json';

const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: computerData.default,
  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice"
  }
};

class Navigation extends React.Component {

  render() {
    return (
        <>
          <Navbar expand="lg" fixed="top" className="nav-bar" bg="transparent" >
          <Navbar.Brand href="/"><Lottie className="lottie" options={defaultOptions3} height={50} width={50} /><span className="trost-nav">Conrad Trost</span></Navbar.Brand>

            <Navbar.Toggle className="border-0 navbar-hamburger" aria-controls="navbar-toggle" variant="dark"/>
            <Navbar.Collapse id="navbar-toggle">
              
                <Nav className="ml-auto">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                  <NavLink className="nav-link" to="/projects">Projects</NavLink>
                  <NavLink className="nav-link" to="/resume">Resumé</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          </>
    );
  }
}


export default Navigation;