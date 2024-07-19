import React from "react";
import Talent from "../../HomeContainer/Talent/Talent";
import SuccessStories from "../../HomeContainer/SuceessStories/SuccessStories";
import BuildManagement from "../../HomeContainer/Management/BuildManagement";

const Home = () => {
  return <>
      <Talent />
      <BuildManagement />
      <SuccessStories />
    </>
  );
};

export default Home;
