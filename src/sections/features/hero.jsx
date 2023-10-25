import React from "react";
import assets from "../../constants/assets";
import LinkIcon from "../../components/link";
import { Heading1 } from "../../components/headings";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <>
            <main className=" bg-main py-20 md:py-40 flex flex-col-reverse md:flex-row md:justify-between items-center gap-16">
                <div className=" ">
                    <Heading1 text="All the features you need" color="text-white" />
                    <p className=" pt-6 text-greyy text-center md:text-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt.
                    </p>
                    <div className="mt-12 flex justify-evenly md:justify-start space-x-7 md:space-x-12 items-center">
                        <button  className=" rounded-2xl md:rounded-3xl text-xs lg:text-base py-2 lg:py-4 px-5 lg:px-12 hover:bg-red-100 bg-yell text-semibold">
                            <Link to='/pricing'>View Pricing</Link>
                        </button>
                    </div>
                </div>
                <img src={assets.feature_hero} alt="" className="md:w-1/2" />
            </main>
        </>
    );
};
