import React from "react";
import data from "../constants/data";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const currentPage = (route) => {
    return route === location.pathname;
  };

  return (
    <>
      <header className="flex justify-between items-center p-8 shadow-2xl bg-main text-white px-[100px]">
        <h1>LOGO</h1>
        <ul className="flex space-x-12 items-center">
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
          <button className=' border-white border rounded-3xl py-4 px-12 hover:bg-main hover:text-white'>
            Contact Us
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
