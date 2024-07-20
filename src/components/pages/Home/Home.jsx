import React from "react";
import SuccessStories from "../../HomeContainer/SuceessStories/SuccessStories";
import BuildManagement from "../../HomeContainer/Management/BuildManagement";
import FourthSection from "../../HomeFourthSection/FourthSection";

const Home = () => {
  return (
    <>
      <BuildManagement />
      <SuccessStories />
      <FourthSection />
    </>
  );
};

export default Home;
