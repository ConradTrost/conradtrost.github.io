import React from "react";

import Navigation from "../components/Navbar";
import HomePage from './HomePage';


function Main() {
  return (
    <>
        <Navigation className="homeNav" />
        <HomePage />
    </>
  );
}

export default Main; 