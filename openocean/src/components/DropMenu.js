import React from "react";
import moon from "../resources/moon.svg";
import stats from "../resources/stats.svg";
import library from "../resources/library.svg";
import explore from "../resources/explore.svg";
import chevronright from "../resources/chevronright.svg";
import toggle from "../resources/toggle.svg";
import twitter from "../resources/twitter.png";
import insta from "../resources/insta.png";
import discord from "../resources/discord.png";
import reddit from "../resources/reddit.png";
import youtube from "../resources/youtube.png";
import tiktok from "../resources/tiktok.png";

const DropMenu = (props) => {
  return (
    <div
      className={`md:w-[420px] md:right-0 fixed  w-[100%]  h-[calc(100vh-4.5rem)] bg-[#fbfdff]    ${
        props.burger ? " hidden " : ""
      } `}
    >
      <ul className="flex flex-col justify-center">
        <li className="pt-5 ml-2.5 ">
          <a
            href="http://www.google.com"
            className="flex align-center items-center"
          >
            <img src={explore} className="w-8" />

            <h2 className="pl-2 font-semibold text-[#424d56]">Explore</h2>
            <img src={chevronright} className="w-6 ml-auto mr-2.5" />
          </a>
        </li>
        <li className="pt-10 ml-2.5 ">
          <a
            href="http://www.google.com"
            className="flex align-center items-center"
          >
            <img src={stats} className="w-8" />
            <h2 className="pl-2 font-semibold  text-[#424d56]">Stats</h2>
            <img src={chevronright} className="w-6 ml-auto mr-2.5" />
          </a>
        </li>
        <li className="pt-10 ml-2.5 ">
          <a
            href="http://www.google.com"
            className="flex align-center items-center"
          >
            <img src={library} className="w-8" />
            <h2 className="pl-2 font-semibold  text-[#424d56]">Resources</h2>
            <img src={chevronright} className="w-6 ml-auto mr-2.5" />
          </a>
        </li>
        <li className="pt-10 ml-2.5 ">
          <a
            href="http://www.google.com"
            className="flex align-center items-center max-h-[32px]"
          >
            <img src={moon} className="w-8 rotate-45" />
            <h2 className="pl-2 font-semibold  text-[#424d56]">Night mode</h2>
            <img
              src={toggle}
              className="w-[3.6rem] h-[100%] ml-auto mr-[0.3rem] "
            />
          </a>
        </li>
      </ul>
      <div className="btnl mt-[13.7rem] ml-[1.2rem] mr-[1.2rem] md:mt-[1.95rem] md:mr-[14rem] md:ml-[1.25rem]   md:w-[176.74px]">
        <div className="bg-[#2081e2] w-[100%] h-[60px] rounded-[0.7rem] flex items-center justify-center">
          <a className="text-white font-semibold">Connect wallet</a>
        </div>
      </div>

      <div className="border-t-[1px] mt-[0.5rem] mb-[1.7rem] md:mt-[12.2rem]"></div>

      <div className="fter md:mt-[0rem] flex justify-center">
        <ul className="flex justify-center items-center max-w-[20rem] mr-[7rem] ml-[7rem] ">
          <li className="mr-[2rem] ml-[1rem]">
            <a href="http://www.google.com"></a>
            <img className="min-w-[1.7rem]" src={twitter} />
          </li>
          <li className="mr-[2rem]">
            <a href="http://www.google.com">
              <img className="min-w-[1.2rem]" src={insta} />
            </a>
          </li>
          <li className="mr-[2rem]">
            <a href="http://www.google.com">
              <img className="min-w-[1.7rem]" src={discord} />
            </a>
          </li>
          <li className="mr-[2rem]">
            <a href="http://www.google.com">
              <img className="min-w-[1.2rem]" src={reddit} />
            </a>
          </li>
          <li className="mr-[2rem]">
            <a href="http://www.google.com">
              <img className="min-w-[1.7rem]" src={youtube} />
            </a>
          </li>
          <li className="mr-[1rem]">
            <a href="http://www.google.com">
              <img className=" min-w-[1.3rem] md:w-[7rem]" src={tiktok} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropMenu;
