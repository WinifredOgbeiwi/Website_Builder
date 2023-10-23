import React, { useState } from "react";
import data from "../constants/data";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuUnfold } from 'react-icons/ai'
const Header = () => {
  const location = useLocation();

  const currentPage = (route) => {
    return route === location.pathname;
  };

  const [isShown,setIsShown]= useState(false)
  return (
    <>
      <header className="flex relative justify-between w-full items-center py-8 shadow-2xl bg-main text-white ">
        <h1>LOGO</h1>
        <ul className="hidden md:flex space-x-7 xl:space-x-12 items-center text-sm lg:text-base ">
          {data.header_links_data.map(({ id, link, text }) => {
            return (
              <li
                id={id}
                className={`hover:underline ${
                  currentPage(link) ? "text-greyy" : "text-white"
                }`}
              >
                {" "}
                <Link to={link}>{text}</Link>
              </li>
            );
          })}
          <button className=' border-white border rounded-3xl py-2 lg:py-4 px-6 lg:px-12 hover:bg-main hover:text-white'>
            Contact Us
          </button>
      
        </ul>
        {/* menu */}
        <div onClick={()=>setIsShown(!isShown)} className=" text-3xl block md:hidden">
          <AiOutlineMenuUnfold />
          {isShown && (
            <div className="absolute w-1/2 py-2 right-0 z-50 bg-[#1c1e5380]">
              <ul className="flex flex-col space-y-7 items-center text-lg ">
                {data.header_links_data.map(({ id, link, text }) => {
                  return (
                    <li
                      id={id}
                      className={`hover:underline ${currentPage(link) ? "text-greyy" : "text-white"
                        }`}
                    >
                      {" "}
                      <Link to={link}>{text}</Link>
                    </li>
                  );
                })}
                <button className=' border-white border rounded-3xl py-2 lg:py-4 px-6 lg:px-12 hover:bg-main hover:text-white'>
                  Contact Us
                </button>

              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
// [#1c1e5380]