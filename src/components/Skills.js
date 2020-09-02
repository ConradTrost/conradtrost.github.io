import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import Footer from './Footer';
import { ReactComponent as YourSVG } from '../assets/images/myself_seo.svg';

class Project2 extends Component {
    render() {

        return (
            <Container className="skill-container" fluid>
                <Footer />
            </Container>
        )
    }
}

export default Project2
