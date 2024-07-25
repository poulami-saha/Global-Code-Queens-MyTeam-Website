import React from "react";
import { Talent, SuccessStories, BuildManagement } from "../../HomeContainer";
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
