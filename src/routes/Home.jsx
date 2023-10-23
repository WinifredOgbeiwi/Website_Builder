import React from "react";
import LandingPage from "../sections/landingPage";
import HowWeWorks from "../sections/HowWeWorks";
import Projects from "../sections/Projects";
import Features from "../sections/Features";
import Reviews from "../sections/reviews";

const Home = () => {
  return (
    <>
      <LandingPage />
      <HowWeWorks />
      <Projects />
      <Features />
      <Reviews/>
    </>
  );
};

export default Home;
