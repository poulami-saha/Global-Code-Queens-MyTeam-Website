import React from "react";
import { AboutDetails, Directors, Clients } from "../../AboutContainer";
import { ReadyToStart } from "../../utility";

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
