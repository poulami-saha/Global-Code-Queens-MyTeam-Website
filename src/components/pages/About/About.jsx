import React from "react";
import { AboutDetails, Directors, Clients } from "../../AboutContainer";
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
