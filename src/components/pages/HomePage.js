import React, { Component } from 'react'

import Footer from '../Footer';

import Lottie from 'react-lottie';
import { Col, Row, Button } from 'react-bootstrap';
import FadeIn from "react-fade-in";

// Get compressed to load first?
// import * as webp from '../../assets/images/placeholder.webp';
// import * as placeholder from '../../assets/images/placeholder.jpg';
import * as scrollData from '../../scrollLottie.json';
import * as headShot from '../../assets/images/editedheadshot2.jpg';
import * as webp from '../../assets/images/editedheadshot2.webp';

const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: scrollData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
  };

export class HomePage extends Component {
    render() {

        return (
            <div className="homeContain">
                <Row>
                    {/* <div className="lottie1">
                            <Lottie className="lottie1" options={defaultOptions4} height={50} width={50} />
                    </div> */}
                    
                    <Col lg={7} md={12} sm={12} className="home-left">
                        <div className="inner-left">
                            <FadeIn delay="400">
                                <h1 className="display-1">I'm Conrad.<br></br> Nice to meet you.</h1>
                                <div class="subtext">
                                    <p className="lead">I am a full-stack web developer based in Dallas, Texas. 
                                    I find passion in creating things from lines of words and characters.</p>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="btn-holders">
                            <a className="email-btn" href="mailto:conrad@trost.dev" target="_blank" rel="noopener noreferrer"><Button className="cta-btn" variant="outline-primary">Get in Touch!</Button></a>
                        </div>
                    </Col>
                    <Col md={5} className="home-right">
                        <FadeIn delay="200">
                        <picture>
                            <source srcSet={require('../../assets/images/editedheadshot2.webp')} type="image/webp" />
                            <source srcSet={require('../../assets/images/editedheadshot2.jpg')} type="image/jpeg" />
                            <img src={headShot} alt="Headshot" />
                        </picture>
                        </FadeIn>
                    </Col>
                </Row>
                <div className="footer lottie1">
                <div className="fab-container">
                    <a href="https://github.com/retro1967" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="fab fa-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/conrad-trost-635b591a0/" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                </div>
            </div>
            </div>
        )
    }
}

export default HomePage;

