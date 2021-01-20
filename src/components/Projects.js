import React, { Component } from 'react'
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';

import Footer from './Footer';
import * as featured from '../assets/images/space.jpg';
import * as car from '../assets/images/car.jpg'
import * as remote from '../assets/images/remote.jpg';
import * as featured_webp from '../assets/images/space.webp';
import * as car_webp from '../assets/images/car.webp'
import * as remote_webp from '../assets/images/remote.webp';

class Projects extends Component {
    render() {

        const projects = [
            {
                name: 'Remote Social',
                link: 'https://github.com/retro1967/remote-social',
                description: 'Users can search for movies and save them to their watchlist. Demonstrates complete use of the MERN Stack.',
                technologies: 'React, MongoDB, GraphQL, Apollo, and Bootstrap.',
                image: remote,
                webp: remote_webp
            },
            {
                name: 'NEOO',
                link: 'https://github.com/retro1967/NEOO',
                description: 'Track Near-Earth-Orbiting-Objects on any date to see information and hazard level.',
                technologies: 'jQuery, Javascript, NASA\'s NeoWS API, Bootstrap.',
                image: featured,
                webp: featured_webp
            },
            {
                name: 'Motor Services',
                link: 'https://github.com/retro1967/motor-services',
                description: 'Keep track of maintenance issues using the logbook or see which maintenance needs to be done based on your mileage.',
                technologies: 'Express, Handlebars.js, MySQL, Node.js.',
                image: car,
                webp: car_webp
            }
        ];

        const i = 0;

        return (
            <Container className="project-container" fluid>
                <Row className="project-row">
                    <Col className="display-3 project-header">Projects</Col>
                </Row>
                <Row className="proj-row">
                    <CardColumns className="projects-cols" >
                    {projects.map(thing => (
                        <Col className="projects-column" md='auto'>
                            <Card className="proj-col">
                                <picture >
                                    <source className="card-img-top proj-img" srcSet={thing.webp} type="image/webp" />
                                    <source className="card-img-top proj-img" srcSet={thing.image} type="image/jpeg" />
                                    <img className="card-img-top proj-img" src={thing.image} alt={thing.title} />
                                </picture>
                                {/* <Card.Img className="proj-img" src={thing.image} alt={thing.title} variant="top" /> */}
                                <Card.Body>
                                <Card.Title className="proj-title"><a href={thing.link} rel="noopener noreferrer" target="_blank" className="display-4">{thing.name}</a></Card.Title>
                                <Card.Text className="lead">
                                    {thing.description}
                                </Card.Text>
                                <Card.Text className="lead">
                                Features: <span className="bolded">{thing.technologies}</span>
                                </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        
                    ))}
                    </CardColumns>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Projects
