import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Mission = () => {
    return (
        <section className=" py-20 md:py-[128px] bg-[#EEF4FA]">
            <div className="flex items-center space-x-20 xl:space-x-40" >
                <div className="text-center md:text-start">
                    <p>Our Mission</p>
                    <Heading3 text="Inspire, Innovate, Share" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={assets.about_3} alt="" className="lg:block hidden"/>
            </div>
            <div className="flex items-center lg:space-x-20 xl:space-x-40 space-x-0 mt-20" >
                <img src={assets.about_4} alt="" className="lg:block hidden" />
                <div className="text-center md:text-start">
                    <p >Our Vision</p>
                    <Heading3 text="Laser focus" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

            </div>

        </section>
    );
};
