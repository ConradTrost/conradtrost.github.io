import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loading from "./components/loading.js";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

import "./App.scss";

// analytics
import ReactGA from "react-ga";
const TRACKING_ID = "UA-188054952-1";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById("root")
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Loading />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
