import React from "react";
import LandingPage from "../sections/landingPage";
import HowWeWorks from "../sections/HowWeWorks";
import Projects from "../sections/Projects";
import Features from "../sections/Features";
import Reviews from "../sections/reviews";
import Faq from "../sections/faq";
import Inquiry from "../sections/inquiry";
import Blog from "../sections/blog";

const Home = () => {
  return (
    <>
      <LandingPage />
      <HowWeWorks />
      <Projects />
     {/*  <Features />
      <Reviews/>
      <Faq/>
      <Inquiry/>
      <Blog/> */}
    </>
  );
};

export default Home;
