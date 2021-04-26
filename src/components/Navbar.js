import React from 'react';

import Lottie from 'react-lottie';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap/';

import * as computerData from '../computer.json';

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
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/resume">Resumé</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
          </>
    );
  }
}


export default Navigation;