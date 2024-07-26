import React from "react";
import {
  AboutDetails,
  Directors,
  Clients,
} from "../../components/AboutContainer";
import { ReadyToStart } from "../../components/utility";

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
