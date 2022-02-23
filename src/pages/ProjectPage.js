import React, { Component } from 'react'
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';

export class ProjectPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Projects />
            </div>
        )
    }
}

export default ProjectPage
