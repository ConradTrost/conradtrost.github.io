import React, { Component } from 'react'

import About from '../components/About';
import Skills from '../components/Skills';
import Navigation from '../components/Navbar';

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
