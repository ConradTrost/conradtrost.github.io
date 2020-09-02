import React, { Component } from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';

import { Container, Row, Col, Button } from 'react-bootstrap';

export class ContactPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container className="project-container" fluid>
                <Row className="project-row">
                    <Col><p className="display-2 project-header contact-header">Get in touch, I don't bite!</p></Col>
                </Row>
                <Row>
                    <Col className="project-row contact-row">
                        <p className="display-4 contact-descript">I'd love to hear about any opportunities.</p>
                        <div className="btn-container">
                            <a href="mailto:conrad@trost.dev" rel="noopener noreferrer" target="_blank"><Button variant="outline-dark">Email</Button></a>
                            <a href="tel:954-826-1996"><Button variant="outline-dark">Phone</Button></a>
                        </div>
                    </Col>
                </Row>
                <Col className="contact-column">
                    <p className="lead">Don't like buttons?</p>
                    <p className="lead">My email is <span className="contact-links">conrad@trost.dev</span>.</p>
                    <p className="lead">You can also reach me by phone at <span className="contact-links">(954)-826-1996</span>.</p>
                </Col>
                <Footer />
                </Container>
            </div>
        )
    }
}

export default ContactPage
