import React from "react";
import { Talent, SuccessStories, BuildManagement } from "../../HomeContainer";
import { ReadyToStart } from "../../utility";

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
