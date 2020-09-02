import React, { Component } from 'react'

import About from '../About';
import Skills from '../Skills';

import Navigation from '../Navbar';

export class AboutPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <About />
            </div>
        )
    }
}

export default AboutPage;
