import React from "react";
import Talent from "../../HomeContainer/Talent/Talent";
import SuccessStories from "../../HomeContainer/SuceessStories/SuccessStories";
import BuildManagement from "../../HomeContainer/Management/BuildManagement";
import ReadyToStart from "../../ReadyToStart/ReadyToStart";

const Home = () => {
  return (
    <>
      <Talent />
      <BuildManagement />
      <SuccessStories />
      <ReadyToStart />
    </>
  );
};

export default Home;
