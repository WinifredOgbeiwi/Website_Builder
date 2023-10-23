import React from "react";
import assets from "../constants/assets";
import LinkIcon from "../components/link";

const LandingPage = () => {
    return (
        <>
            <main className=" bg-main py-20 md:py-40 flex flex-col-reverse md:flex-row md:justify-between items-center gap-16">
                <div className=" ">
                    <h1 className=" text-white text-center md:text-start text-4xl xl:text-6xl font-semibold leading-snug ">
                        Building stellar websites for early startups
                    </h1>
                    <p className=" pt-6 text-greyy text-center md:text-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt.
                    </p>
                    <div className="mt-12 flex justify-evenly md:justify-start space-x-7 md:space-x-12 items-center">
                        <button className=" border rounded-2xl md:rounded-3xl text-xs lg:text-base py-2 lg:py-4 px-5 lg:px-12 hover:bg-red-100 bg-yell text-semibold">
                            View Our Works
                        </button>
                       
                        <LinkIcon link={"/pricing"} text={"View Pricing"} color="text-white"/>
                    </div>
                </div>
                <img src={assets.LandingPage} alt=""  className="md:w-1/2" />
            </main>
        </>
    );
};
export default LandingPage;
