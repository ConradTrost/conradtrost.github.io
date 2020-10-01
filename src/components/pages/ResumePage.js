import React, { Component } from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';
import * as resume from '../../assets/Resume-09-2020.pdf';

export class ResumePage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="resume-container">
                    <embed className="resume" src={resume} />
                </div>
                <Footer />
            </>
        )
    }
}

export default ResumePage
