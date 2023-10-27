import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Mission = () => {
    return (
        <section className=" py-20 md:py-[128px] bg-[#EEF4FA]">
            <div className="flex flex-col md:flex-row items-center max-[767px]:space-y-10  md:space-x-20 xl:space-x-40 md:mb-20" >
                <div className="text-center md:text-start md:w-1/2 ">
                    <p>Our Mission</p>
                    <Heading3 text="Inspire, Innovate, Share" />
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="md:w-1/2">
                    <img src={assets.about_3} alt="mission"  />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center max-[767px]:space-y-10  md:space-x-20 xl:space-x-40" >

                <div className="md:w-1/2">
                    <img src={assets.about_4} alt="vision" />
                </div>
                <div className="text-center md:text-start md:w-1/2  ">
                    <p >Our Vision</p>
                    <Heading3 text="Laser focus" />
                    <p className="max-[767px]:mb-10 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

            </div>

        </section>
    );
};
