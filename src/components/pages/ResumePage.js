import React, { Component } from 'react'

import { Col, Row } from 'react-bootstrap';

import Navbar from '../Navbar';
import Footer from '../Footer';
import * as resume from '../../assets/Resume-09-2020.pdf';

export class ResumePage extends Component {

    render() {

        const style = {
            margin: "90px auto",
        }

        return (
            <>
                <Navbar />
                {/* <div className="resume-container">
                    <embed className="resume" src={resume} />
                </div> */}
                <div style={style} className="container resume-contain">
                    <Row>
                        <Col lg={8}>
                            <h2 className="display-4">Conrad Trost</h2>
                            <p className="lead">Experienced <strong>Computer and IT</strong>-focused individual
                            with a background in <strong>Computer Engineering, Finance, and Mathematics.</strong>
                            Holds education and learning as a fundamental part of success.</p>
                        </Col>

                        <Col lg={4}>
                            <p className="lead">3015 Alcove Ln</p>
                            <p className="lead">Corinth, TX 76210</p>
                            <p className="lead" style={{ fontWeight: "bold",  }}>(954) 826-1996</p>
                            <p className="lead" style={{ fontWeight: "bold",  }}>conrad@trost.dev</p>
                        </Col>

                    </Row>
                    <Row style={{ marginTop: "40px" }}>
                        <Col lg={8}>
                            <Row>
                                <Col>
                                    <h3>Experience</h3>
                                    <p><strong>Cedarcide, </strong>Dallas - <span style={{ fontStyle: "italic" }}>Web Developer</span></p>
                                    <p style={{ color: "grey" }}>August 2020 - Present</p>
                                    <p>
                                        Worked with a team of 2 others to create 1 website and overhaul 6 other websites to optimize ​SEO​ and site speed. 
                                        Utilizing ​PHP ​to create custom Wordpress/WooCommerce websites.
                                        On a team of 3 to ​expedite loading times​ and​ promptly troubleshoot issues​ on a website producing $6M annually.
                                    </p>
                                </Col>
                                </Row>
                            
                            <Row >
                                <Col>
                                    <p><strong>Freelance, </strong>Dallas - <span style={{ fontStyle: "italic" }}>Full Stack Web Developer</span></p>
                                    <p style={{ color: "grey" }}>March 2020 - Present</p>
                                    <p>
                                        Developing/overhauling websites for local businesses using MERN Stack technology. Implemented enhanced ​SEO​ and ​accessibility​ techniques 
                                        and creative design with ​attention to detail​. Crafted independent contractor agreements for the freelance work provided.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <Row>
                                <Col>
                            <h3>Skills</h3>
                            <p>Detail-Oriented</p>
                            <p>Quick Learner</p>
                            <p>Computer Software</p>
                            <p>Computer Hardware</p>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Technical Skills</h3>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </>
        )
    }
}

export default ResumePage
