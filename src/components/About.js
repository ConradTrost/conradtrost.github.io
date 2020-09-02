import React, { Component } from 'react'

import { Row, Col } from 'react-bootstrap';
import { ReactComponent as YourSVG } from '../assets/images/myself_seo.svg';
import Footer from './Footer';

export class About extends Component {
    render() {
        return (
            <div className="about-container">

                <Row className="skill-rows">

                    <Col lg={4}></Col>
                    <Col lg={4}><p className="display-4 about-header">About</p></Col>
                    <Col lg={4}></Col>
      
                </Row>

                <Row className="skill-rows">
                    <Col md={5}>
                        <YourSVG className="skill-svg" />
                    </Col>

                    <Col md={6} className="descript-col">
                        <p className="lead">I am a React front-end builder and designer with years of experience in design, SEO, and accessibility.</p>
                        <br></br>
                        <p className="lead">I am a back-end architect with experience in MongoDB, Express, Node.js, and Python.</p>
                        <br></br>
                        <p className="lead">I primarily focus in MERN Stack web development.</p>
                        <br></br>
                        <p className="lead">I love to learn. I am constantly diving in to the newest technologies and strive to develop a deeper understanding of the fundamentals of code and all that can be done.</p>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

export default About;
