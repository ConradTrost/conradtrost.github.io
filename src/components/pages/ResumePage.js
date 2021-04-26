import React, { Component } from 'react'

import { Col, Row } from 'react-bootstrap';

import Navbar from '../Navbar';
import Footer from '../Footer';
import * as resume from '../../assets/resume.pdf';

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
                    <div className="header">
                        <h2 className="display-4">Conrad Trost</h2>
                        <a href={resume} download>Download PDF</a>
                    </div>

                    <Row>
                        <Col lg={7} class="resume-leftSide">
                            <Row>
                                <p className="lead">Experienced <strong>Computer and IT</strong>-focused individual
                                with a background in <strong>Computer Engineering, Finance, and Mathematics.</strong>
                                Holds education and learning as a fundamental part of success.</p>
                            </Row>
                            <Row>
                                    <h3>Experience</h3>
                                <div class="resume-cedarcide">
                                    <p><strong>Cedarcide, </strong>Dallas - <span style={{ fontStyle: "italic" }}>Web Developer</span></p>
                                    <p className="highlighted">August 2020 - Present</p>
                                    <p>
                                        Managed 6 websites on a team of 2.<br /> 
                                        Developed custom features built in <b>JavaScript</b> to <b>optimize site speed</b> using techniques such as <b>script deferring</b> and <b>conditional loading</b>.<br />
                                        Created <b>PHP plugins</b> to establish consumer urgency.<br />
                                        Updated <b>user experience</b> with marketing strategies leading to <b>increase conversions</b>.<br />
                                        Led a project to <b>improve SEO</b>, resulting in a <b>12% increase</b> in <b>organic traffic</b>.<br />
                                    </p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.cedarcide.com/">Cedarcide.com</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://immortelleliving.com/">ImmortelleLiving.com</a></p>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://cedaroilstore.com/">CedarOilStore.com</a></p>
                                </div>
                                <div class="resume-freelance">
                                    <p><strong>Freelance, </strong>Dallas - <span style={{ fontStyle: "italic" }}>Full Stack Web Developer</span></p>
                                    <p className="highlighted">March 2020 - Present</p>
                                    <p>
                                        Primarily worked with Insurance &#38; Real Estate Agencies.<br />
                                        Developing <b>headless Wordpress</b> websites with <b>React</b> on the front end.<br />
                                        Implemented enhanced ​SEO​, accessibility​, and marketing techniques.<br />
                                        Utilized creative design &#38; ​attention to detail​, resulting in engaging, modern websites.
                                    </p>
                                </div>
                            </Row>

                            <Row>
                                <h3>Education</h3>
                                <p><strong>University of Texas at Austin, </strong>Certificate - <span style={{ fontStyle: "italic" }}>Full Stack Web Development</span></p>
                                <p className="highlighted">March 2020 - September 2020</p>
                                <p>Demonstrated ability to properly utilize <b>React, Express, JavaScript</b>, as well as <b>MySQL</b> and <b>MongoDB</b>.</p>

                            </Row>
                        </Col>

                        <Col lg={1}>

                        </Col>

                        <Col lg={4}>
                            <div class="resume-info">
                                <p className="lead">6760 Windhaven Pkwy</p>
                                <p className="lead">The Colony, TX 75056</p>
                                <p><a className="lead" style={{ fontWeight: "bold",  }} href="tel:+19548261996">(954) 826-1996</a></p>
                                <p><a className="lead" style={{ fontWeight: "bold",  }} href="mailto:conrad@trost.dev">conrad@trost.dev</a></p>
                            </div>

                            <div class="resume-skills">
                                <h3>Skills</h3>
                                <p>Detail-Oriented</p>
                                <p>Quick Learner</p>
                                <p>Computer Software</p>
                                <p>Computer Hardware</p>
                            </div>

                            <div class="resume-technicals">
                                <h3>Technical Skills</h3>
                                <p>JavaScript</p>
                                <p>React</p>
                                <p>PHP</p>
                                <p>Wordpress</p>
                                <p>CSS/jQuery Animations</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </>
        )
    }
}

export default ResumePage
