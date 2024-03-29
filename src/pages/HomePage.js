import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import FadeIn from "react-fade-in";

import * as headShot from "../assets/images/editedheadshot2.jpg";
// import * as webp from '../../assets/images/editedheadshot2.webp';

export class HomePage extends Component {
  render() {
    return (
      <div className="homeContain">
        <Row>
          <Col lg={7} md={12} sm={12} className="home-left">
            <div className="inner-left">
              <FadeIn delay="400">
                <h1 className="display-1">
                  I'm <span>Conrad.</span>
                  <br></br> Nice to meet you.
                </h1>
                <div class="subtext">
                  <p className="lead">
                    I am a Full-Stack Web Developer based in Dallas, Texas.
                  </p>
                  <p className="lead">
                    I utilize my experience in{" "}
                    <span className="impt_txt">marketing</span> and{" "}
                    <span className="impt_txt">computer engineering</span> to
                    create efficiently-coded, engaging websites.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="btn-holders">
              <a className="email-btn" href="/contact">
                <Button className="cta-btn" variant="outline-primary">
                  Get in Touch!
                </Button>
              </a>
            </div>
          </Col>
          <Col md={5} className="home-right">
            <FadeIn delay="200">
              <picture>
                <source
                  srcSet={require("../assets/images/editedheadshot2.webp")}
                  type="image/webp"
                />
                <source
                  srcSet={require("../assets/images/editedheadshot2.jpg")}
                  type="image/jpeg"
                />
                <img src={headShot} alt="Headshot" />
              </picture>
            </FadeIn>
          </Col>
        </Row>
        <div className="footer lottie1">
          <div className="fab-container">
            <a
              href="https://github.com/retro1967"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/conrad-trost-635b591a0/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
