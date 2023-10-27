import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Clientele = () => {
    return (
        <section className="py-20 bg-[#F4F6FC]">

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-20  xl:space-x-40 " >
                <div className="w-full md:w-1/2"><img src={assets.feature_2} alt="revision" /></div>
                <div className="text-center md:text-start w-full md:w-1/2">
                    <p >Free Revision Rounds</p>
                    <Heading3 text="Get free Revisions and one week of free maintenance" />
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

            </div>

        </section>
    );
};
