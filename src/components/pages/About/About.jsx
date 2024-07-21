import React from "react";
import Clients from "../../About/Clients";
import AboutDetails from "../../About/AboutDetails";
import Directors from "../../About/Directors";
import FourthSection from "../../HomeFourthSection/FourthSection";

const About = () => {
  return (
    <>
      <AboutDetails />
      <Directors />
      <Clients />
      <FourthSection />
    </>
  );
};

export default About;
