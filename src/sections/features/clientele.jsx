import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Clientele = () => {
    return (
        <section className="py-20 bg-[#F4F6FC]">

            <div className="flex items-center lg:space-x-20 xl:space-x-40 space-x-0" >
                <img src={assets.feature_2} alt="" className="lg:block hidden" />
                <div className="text-center md:text-start">
                    <p >Free Revision Rounds</p>
                    <Heading3 text="Get free Revisions and one week of free maintenance" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

            </div>

        </section>
    );
};
