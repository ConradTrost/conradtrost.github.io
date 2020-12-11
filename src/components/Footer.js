import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="fab-container">
                    <a href="https://github.com/retro1967" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="fab fa-github footer-btn"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/conrad-trost-635b591a0/" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <i className="fab fa-linkedin-in footer-btn"></i>
                    </a>

                </div>
            </div>
        )
    }
}

export default Footer;
