import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Support = () => {
    return (
        <section className="py-20 md:py-[128px]">

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-20 " >
                <div className="text-center md:text-start w-full md:w-1/2">
                    <p >24/7 Support</p>
                    <Heading3 text="Working with us, you will be getting 24/7 priority support" />
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="w-full md:w-1/2"><img src={assets.feature_3} alt="support" /></div>
            </div>

        </section>
    );
};
