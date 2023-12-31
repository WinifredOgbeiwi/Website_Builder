import React, { useState } from "react";
import LinkIcon from "../../components/link";
import assets from "../../constants/assets";
import HoverTexts from "../../components/hoverTexts";
import { Heading2 } from "../../components/headings";

const Projects = () => {
    const [isHoverShown, setHoverShown] = useState({
        image1: false,
        image2: false,
        image3: false,
    });

    const handleMouseEnter = (image) => {
        setHoverShown({ ...isHoverShown, [image]: true });
    };

    const handleMouseLeave = (image) => {
        setHoverShown({ ...isHoverShown, [image]: false });
    };

    return (
        <section className=" py-10 sm:py-[128px] ">
            <div className=" flex justify-between items-center mb-4 sm:mb-16">
                <Heading2 text="View our projects" />
                <LinkIcon link="/project" text={"View More"} />
            </div>

            <div className="flex flex-col md:flex-row gap-y-4 justify-between md:space-x-10">
                <div
                    className=" relative "
                    onMouseEnter={() => handleMouseEnter("image1")}
                    onMouseLeave={() => handleMouseLeave("image1")}
                >
                    {isHoverShown.image1 && (
                        <HoverTexts
                            heading="Workhub office Webflow Webflow Design"
                            paragraph="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam"
                            width="w-1/2"
                            bottom="mb-10"
                        />
                    )}
                    <img src={assets.Project_1} alt="" />
                </div>

                <div className="flex md:flex-col space-x-3  md:space-y-5">
                    <div
                        className=" relative "
                        onMouseEnter={() => handleMouseEnter("image2")}
                        onMouseLeave={() => handleMouseLeave("image2")}
                    >
                        {isHoverShown.image2 && (
                            <HoverTexts
                                heading=" Unisaas Website Design"
                                width="w-full" />
                        )}
                        <img src={assets.Project_2} alt="" />
                    </div>

                    <div
                        className=" relative "
                        onMouseEnter={() => handleMouseEnter("image3")}
                        onMouseLeave={() => handleMouseLeave("image3")}
                    >
                        {isHoverShown.image3 && (
                            <HoverTexts
                                heading=" Unisaas Website Design"
                                width="w-full" />
                        )}
                        <img src={assets.Project_3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
