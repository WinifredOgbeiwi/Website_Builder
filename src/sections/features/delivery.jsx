import React from "react";
import { Heading3 } from "../../components/headings";
import assets from "../../constants/assets";

export const Delivery = () => {
    return (
        <section className="py-20 md:py-[128px] bg-[#fcd9801a]">
            <img src={assets.feature_3} alt="" className="lg:block hidden" />
            <div className="flex items-center lg:space-x-20 xl:space-x-40 space-x-0" >
                <div className="text-center md:text-start">
                    <p>Quick Delivery</p>
                    <Heading3 text="Guranteed 1 week delivery for standard five pager website" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </section>
    );
};
