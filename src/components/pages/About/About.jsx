import React from "react";
import Clients from "../../About/Clients";
import AboutDetails from "../../About/AboutDetails";
import Directors from "../../About/Directors/Directors";
import ReadyToStart from "../../ReadyToStart/ReadyToStart";

const About = () => {
  return (
    <>
      <AboutDetails />
      <Directors />
      <Clients />
      <ReadyToStart />
    </>
  );
};

export default About;
