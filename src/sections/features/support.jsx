import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Support = () => {
    return (
        <section className="py-20 py-[128px]">

            <div className="flex items-center lg:space-x-20 xl:space-x-40 space-x-0" >
                <div className="text-center md:text-start">
                    <p >24/7 Support</p>
                    <Heading3 text="Working with us, you will be getting 24/7 priority support" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <img src={assets.feature_3} alt="" className="lg:block hidden" />
            </div>

        </section>
    );
};
