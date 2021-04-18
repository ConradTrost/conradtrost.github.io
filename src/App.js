import React from "react";
import { Helmet } from 'react-helmet';

import Loading from "./loading.js";
import ReactDOM from 'react-dom';
import AboutPage from './components/pages/AboutPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
import ResumePage from './components/pages/ResumePage';
import * as MetaDescSS from './assets/images/trost-logo.png';

import "./App.scss";

// analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-188054952-1";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

function App() {
  return (
    // <Router>
      <div className="App">
        <Helmet>
          <meta prefix="og: http://ogp.me/ns#" property="og:image" content="{MetaDescSS}" />
        </Helmet>


          <Route path="/" exact render={() => <Loading />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/projects" render={() => <ProjectPage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/resume" render={() => <ResumePage />} />

      </div>
    // </Router>
  );
}

export default App; 