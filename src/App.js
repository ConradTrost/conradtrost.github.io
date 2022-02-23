import React from "react";

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Loading from "./components/loading.js";
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

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