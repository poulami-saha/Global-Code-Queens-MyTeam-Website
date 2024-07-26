import React from "react";
import {
  Talent,
  SuccessStories,
  BuildManagement,
} from "../../components/HomeContainer";
import { ReadyToStart } from "../../components/utility";

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
