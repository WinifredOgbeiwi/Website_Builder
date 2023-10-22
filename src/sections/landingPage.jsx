import React from "react";
import assets from "../constants/assets";
import LinkIcon from "../components/link";

const LandingPage = () => {
    return (
        <>
            <main className=" bg-main h-screen flex justify-between items-center">
                <div className="max-w-lg">
                    <h1 className=" text-white text-6xl font-semibold leading-snug">
                        Building stellar websites for early startups
                    </h1>
                    <p className=" pt-6 text-greyy">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt.
                    </p>
                    <div className="mt-12 flex space-x-12 items-center">
                        <button className=" border rounded-3xl py-4 px-12 hover:bg-red-100 bg-yell text-semibold">
                            View Our Works
                        </button>
                       
                        <LinkIcon link={"/pricing"} text={"View Pricing"} color="text-white"/>
                    </div>
                </div>
                <img src={assets.LandingPage} alt="" width="50%" />
            </main>
        </>
    );
};
export default LandingPage;
