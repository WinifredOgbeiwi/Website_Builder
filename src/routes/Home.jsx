import React from "react";
import Hero from "../sections/home/hero";
import HowWeWorks from "../sections/home/how_we_works";
import Projects from "../sections/home/projects";
import Features from "../sections/home/features";
import Reviews from "../sections/home/reviews";
import Faq from "../sections/home/faq";
import Inquiry from "../sections/home/inquiry";
import Blog from "../sections/home/blog";

const Home = () => {
    return (
        <>
            <Hero />
            <HowWeWorks />
            <Projects />
            <Features />
            <Reviews />
            <Faq />
            <Inquiry />
            <Blog />
        </>
    );
};

export default Home;
