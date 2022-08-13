import { useState } from "react";
import logo from "../resources/opensea.png";
import search from "../resources/search.svg";
import menu from "../resources/menu.svg";
import close from "../resources/close.svg";

import wallet from "../resources/wallet.svg";
import profile from "../resources/profile.svg";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div>
      <div className="cont bg-white h-[4.5rem]  flex items-center fixed  sm:flex w-[100%] mt-[0rem] inset-0">
        <div className="logo flex items-center ml-4 lg:ml-6">
          <img id="logo" src={logo} className="w-10" />
          <h1 className="lineheightl pl-[0.65rem] lg:mr-[0.6rem]">OpenSea</h1>
        </div>
        <div className="flex justify-center items-center ml-auto mr-[1.25rem]  sm:justify-between sm:mr-[1.65rem] sm:w-[100%] sm:ml-[3.45rem]">
          <div className="search mr-[1.25rem] ml-12 sm:ml-0 sm:justify-between sm:w-[100%]  ">
            <img src={search} className="w-[2rem] sm:w-[2.2rem] sm:hidden" />

            <div className=" hidden sm:block sm:flex sm:w-[100%]">
              <input
                id="boxinput"
                className="bg-white  sm:w-[100%] sm:rounded-[0.6rem] sm:p-[10px] sm:border-2"
                placeholder="Search items, collections and accounts"
              />
            </div>
          </div>

          <div className="menu ml-auto md:flex   ">
            <div className="hidden md:block md:flex md:min-w-[5rem] ">
              <div className="hi flex items-center justify-center">
                <ul className="lg:block lg:flex  hidden lg:items-center lg:justify-center">
                  <li className="mr-[2rem]">
                    <a
                      href="http://www.google.com"
                      className="font-semibold text-[#424d56]"
                    >
                      Explore
                    </a>
                  </li>
                  <li className="mr-[2rem]">
                    <a
                      href="http://www.google.com"
                      className="font-semibold text-[#424d56]"
                    >
                      Stats
                    </a>
                  </li>
                  <li className="mr-[1rem]">
                    <a
                      href="http://www.google.com"
                      className="font-semibold text-[#424d56]"
                    >
                      Resources
                    </a>
                  </li>
                  <li className="ml-[1rem] mr-[2.6rem] ">
                    <a
                      href="http://www.google.com"
                      className="font-semibold text-[#424d56]"
                    >
                      Create
                    </a>
                  </li>
                </ul>
              </div>
              <img
                src={profile}
                className="md:mr-8 md:w-[100%] lg:w-[32px] lg:h-[33px] "
              />
              <img
                src={wallet}
                className="md:mr-[6.2rem] md:w-[100%] lg:w-[32px] lg:h-[33px] lg:ml-auto lg:mr-[4rem] "
              />
            </div>

            <img
              src={props.burger ? menu : close}
              className="w-[2rem] sm:w-[2.2rem] md:w-[2.6rem] md:ml-[0rem] lg:hidden "
              onClick={() => props.handleBurger()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
