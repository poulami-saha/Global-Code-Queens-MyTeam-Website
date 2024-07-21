import React from "react";
import Talent from "../../HomeContainer/Talent/Talent";
import SuccessStories from "../../HomeContainer/SuceessStories/SuccessStories";
import BuildManagement from "../../HomeContainer/Management/BuildManagement";
import FourthSection from "../../HomeFourthSection/FourthSection";

const Home = () => {
  return (
    <>
      <Talent />
      <BuildManagement />
      <SuccessStories />
      <FourthSection />
    </>
  );
};

export default Home;
