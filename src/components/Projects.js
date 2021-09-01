import React, { Component } from 'react'
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';

import Footer from './Footer';
import * as featured from '../assets/images/space.jpg';
import * as car from '../assets/images/car.jpg'
import * as remote from '../assets/images/remote.jpg';
import * as featured_webp from '../assets/images/space.webp';
import * as car_webp from '../assets/images/car.webp'
import * as remote_webp from '../assets/images/remote.webp';
import * as immortelle from '../assets/images/immortelle_30.png';
import * as immortelle_webp from '../assets/images/immortelle_30.webp';
import * as cedarcide from '../assets/images/cedarcide_30.png';
import * as cedarcide_webp from '../assets/images/cedarcide_30.webp';
import * as coi from '../assets/images/coi_30.png';
import * as coi_webp from '../assets/images/coi_30.webp';
import * as ottinsurance from '../assets/images/ottinsurance.png';
import * as ottinsurance_webp from '../assets/images/ottinsurance.webp';

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
            },
            {
                name: 'Ott Insurance Agency',
                link: 'https://ottinsurance.agency/',
                description: 'Static webpage built for a client. Utilizes lazy-loading, webp images, and a lot of SEO metadata.',
                technologies: 'Gatsby, React, Tailwind.CSS',
                image: ottinsurance,
                webp: ottinsurance_webp
            },
            {
                name: 'Immortelle Living',
                link: 'https://immortelleliving.com',
                description: 'Ecommerce website centered around skincare and essential oils. Website was created and maintained by myself and another developer (teammate).',
                technologies: 'Wordpress, Custom PHP Plugins, Custom Theme Development',
                image: immortelle,
                webp: immortelle_webp
            },
            {
                name: 'Cedarcide',
                link: 'https://www.cedarcide.com',
                description: `Multi-million dollar e-commerce site focused on providing safe insecticides to the world. Built with Woocommerce, this website generates millions in revenue annually. Website was created and maintained by myself and another developer (teammate).`,
                technologies: 'Wordpress, Custom PHP Plugins, Custom Theme Development, jQuery, Javascript, PHP.',
                image: cedarcide,
                webp: cedarcide_webp
            },
            // {
            //     name: 'Cedar Oil Industries',
            //     link: 'https://www.cedaroilstore.com',
            //     description: 'Ecommerce website selling insect repellents made from essential oils. Uses Woocommerce, custom PHP plugins and theme adjustments, and Javascript to add flavor and functionality.',
            //     technologies: 'Wordpress, Custom PHP Plugins, Custom Theme Development',
            //     image: coi,
            //     webp: coi_webp
            // },
        ];

        return (
            <Container className="project-container" fluid>
                <Row className="project-row">
                    <Col className="display-3 project-header">Projects</Col>
                </Row>
                <Row xs={1} md={2} xl={3} className="proj-row projects-cols">
                    {projects.map(thing => (
                            <Card className="proj-col" key={thing.name}>
                                <a href={thing.link} rel="noopener noreferrer" target="_blank" className="proj-img-wrap">
                                    <picture >
                                        <source className="card-img-top proj-img" srcSet={thing.webp} type="image/webp" />
                                        <source className="card-img-top proj-img" srcSet={thing.image} type="image/jpeg" />
                                        <img className="card-img-top proj-img" src={thing.image} alt={thing.title} />
                                    </picture>
                                    <div className="proj-overlay">
                                        <div className="gh-link">TEST</div>
                                        <div className="live-link">TEST</div>
                                    </div>
                                </a>
                                <Card.Body>
                                <Card.Title className="proj-title"><h3><a href={thing.link} rel="noopener noreferrer" target="_blank" className="display-4">{thing.name}</a></h3></Card.Title>
                                <Card.Text className="lead">
                                    {thing.description}
                                </Card.Text>
                                <Card.Text className="lead">
                                Features: <span className="bolded">{thing.technologies}</span>
                                </Card.Text>

                                </Card.Body>
                            </Card>
                    ))}
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Projects
