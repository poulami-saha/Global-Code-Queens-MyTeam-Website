import React from "react";
import styles from "./About.module.css";
import Clients from "../../About/Clients";
import AboutDetails from "../../About/AboutDetails";

const About = () => {
  return (
    <>
      <AboutDetails />
      <Clients />
    </>
  );
};

export default About;
