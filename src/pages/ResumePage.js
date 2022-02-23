import React, { Component } from "react";

import { Col, Row } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as resume from "../assets/pdf/resume.pdf";

export class ResumePage extends Component {
  render() {
    const style = {
      margin: "90px auto",
    };

    return (
      <>
        <Navbar />
        {/* <div className="resume-container">
                    <embed className="resume" src={resume} />
                </div> */}
        <div style={style} className="container resume-contain">
          <div className="header">
            <h2 className="display-4">Conrad Trost</h2>
            <a href={resume} download>
              Download PDF
            </a>
          </div>

          <Row>
            <Col lg={7} class="resume-leftSide">
              <Row>
                <p className="lead">
                  Professional Software Engineer with a background in{" "}
                  <strong>
                    Computer Engineering, Finance, and Mathematics.
                  </strong>
                  Holds education and learning as a fundamental part of success.
                </p>
              </Row>
              <Row>
                <h3>Experience</h3>
                <div class="resume-711">
                  <p>
                    <strong>7-Eleven, </strong>Irving -{" "}
                    <span style={{ fontStyle: "italic" }}>
                      Full Stack Web Developer, Contract
                    </span>
                  </p>
                  <p className="highlighted">November 2021 - Present</p>
                  <p>
                    Developing web apps using <b>Angular</b>, <b>NestJS</b>,
                    NgRx, RxJS, and Prisma for the Postgres database.
                  </p>
                  <br />
                </div>
                <div class="resume-cbre">
                  <p>
                    <strong>CBRE, </strong>Dallas -{" "}
                    <span style={{ fontStyle: "italic" }}>
                      Software Engineer, Contract
                    </span>
                  </p>
                  <p className="highlighted">August 2021 - November 2021</p>
                  <p>
                    Front-End component-based UI/UX development using HTML,
                    JavaScript, liquid, SCSS, and some SiteCore
                  </p>
                  <br />
                </div>
                <div class="resume-jands">
                  <p>
                    <strong>Johnson & Sekin, </strong>Dallas -{" "}
                    <span style={{ fontStyle: "italic" }}>Web Developer</span>
                  </p>
                  <p className="highlighted">April 2021 - August 2021</p>
                  <p>
                    Working directly with clients and creative team to extend
                    website functionality using <strong>JavaScript</strong> and{" "}
                    <strong>PHP</strong>. Creating{" "}
                    <strong>HTML banner ads</strong> using CSS/JS. Implementing
                    custom events using Google Tag Manager and Google Analytics.
                    Designing and developing websites and features for various
                    e-commerce, manufacturing, restaurant, and other large
                    companies. Extending <strong>WordPress</strong> using{" "}
                    <strong>custom themes and plugins</strong> to enhance speed
                    and improve customer experience.
                  </p>
                  <br />
                </div>
                <div class="resume-cedarcide">
                  <p>
                    <strong>Cedarcide, </strong>Dallas -{" "}
                    <span style={{ fontStyle: "italic" }}>Web Developer</span>
                  </p>
                  <p className="highlighted">August 2020 - Present</p>
                  <p>
                    Managed 6 websites on a team of 2.
                    <br />
                    Developed custom features built in <b>JavaScript</b> to{" "}
                    <b>optimize site speed</b> using techniques such as{" "}
                    <b>script deferring</b> and <b>conditional loading</b>.
                    <br />
                    Created <b>PHP plugins</b> to establish consumer urgency.
                    <br />
                    Updated <b>user experience</b> with marketing strategies
                    leading to <b>increase conversions</b>.<br />
                    Led a project to <b>improve SEO</b>, resulting in a{" "}
                    <b>12% increase</b> in <b>organic traffic</b>.<br />
                  </p>
                </div>
                <div class="resume-freelance">
                  <p>
                    <strong>Freelance, </strong>Dallas -{" "}
                    <span style={{ fontStyle: "italic" }}>
                      Full Stack Web Developer
                    </span>
                  </p>
                  <p className="highlighted">March 2020 - Present</p>
                  <p>
                    Developing <b>headless Wordpress</b> websites with{" "}
                    <b>Gatsby</b> on the front end.
                    <br />
                    Implemented enhanced ​SEO​, accessibility​, and marketing
                    techniques.
                    <br />
                    Utilized creative design &#38; ​attention to detail​,
                    resulting in engaging, modern websites.
                  </p>
                </div>
              </Row>

              <Row>
                <h3>Education</h3>
                <p>
                  <strong>University of Texas at Austin, </strong>Boot Camp -{" "}
                  <span style={{ fontStyle: "italic" }}>
                    Full Stack Web Development
                  </span>
                </p>
                <p className="highlighted">March 2020 - September 2020</p>
              </Row>
            </Col>

            <Col lg={1}></Col>

            <Col lg={4}>
              <div class="resume-info">
                <p>
                  <a
                    className="lead"
                    style={{ fontWeight: "bold" }}
                    href="tel:+19548261996"
                  >
                    (954) 826-1996
                  </a>
                </p>
                <p>
                  <a
                    className="lead"
                    style={{ fontWeight: "bold" }}
                    href="mailto:conrad@trost.dev"
                  >
                    conrad@trost.dev
                  </a>
                </p>
              </div>

              <div class="resume-skills">
                <h3>Skills</h3>
                <p>Detail-Oriented</p>
                <p>Quick Learner</p>
                <p>Computer Software</p>
                <p>Computer Hardware</p>
              </div>

              <div class="resume-technicals">
                <h3>Technical Skills</h3>
                <p>Angular</p>
                <p>RxJS</p>
                <p>NgRx</p>
                <p>Gatsby</p>
                <p>NestJS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>NodeJS</p>
                <p>PHP</p>
                <p>Wordpress</p>
                <p>CSS/jQuery Animations</p>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}

export default ResumePage;
