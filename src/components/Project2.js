import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import * as featured from '../assets/images/space.jpg';
import * as car from '../assets/images/car.jpg'
import { ReactComponent as YourSvg } from '../assets/images/myself_seo.svg';

class Project2 extends Component {
    render() {

        return (
            <Container className="project-container" fluid>
                <a id="projects"> </a>
                <Row className="project-row">
                    <Col className="display-3 project-header">Projects</Col>
                </Row>
                {/* <Row className="proj-row">
 
                    <div className="project-box featured">
                        <img src={featured} alt={featured} className="project-img" />
                    </div>

                    <h4>NEOO</h4>
        
                </Row> */}
                <Row className="proj-row">
                    {/* <div className="project-box">
                        <img src={car} alt={car} className="project-img" />
                    </div> */}
                    <YourSvg className="project-img" />
                </Row>
            </Container>
        )
    }
}

export default Project2
