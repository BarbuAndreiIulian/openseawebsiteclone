import React from "react";
import "./Hero.css";
import info from "../resources/info.svg";
import play from "../resources/play.svg";

const Hero = (props) => {
  return (
    <div>
      <div
        id="her"
        className={` hero h-[100vh] ${
          props.burger ? "" : "hidden md:block md:h-[calc(100vh-4.5rem)]"
        }  `}
      >
        <section className="herocontent">
          <div className="conti flex  flex-col md:flex-row md:items-center  md:h-[586px] lg:ml-[6rem]  lg:mr-[6rem] ">
            <div className="description pt-[1.9rem] mb-14 flex flex-col justify-center items-center text-center md:w-[50%] md:min-h-[100%] md:ml-[3.1rem]  md:mt-[-0.4rem] lg:mt-[1.3rem] md:text-start md:items-start  lg:max-w-[400px]   ">
              <h1 className="font-semibold text-[28px] lg:text-[45px] leading-[31px] md:leading-[35px] lg:leading-[50px] max-w-[330px] sm:text-[32px] sm:w-[423px]  md:max-w-[100%]  md:max-h-[100%] lg:w-full xl:max-w-[450px] xxl:max-w-[750px]">
                Discover, collect, and sell extraordinary NFTs
              </h1>
              <h3 className=" max-w-[400px] mt-5 text-[18px] leading-[27px] md:text-[24px]  md:leading-[36px] ">
                OpenSea is the world's first and largest NFT marketplace
              </h3>
              <div>
                <ul className="flex mt-[1.2rem]">
                  <li className="flex justify-center items-center w-[120px] h-[60px] bg-[#2081e2] rounded-[0.8rem] mr-[0.6rem] md:w-[167px]  md:mt-[1.4rem]">
                    <a className=" text-white font-semibold">Explore</a>
                  </li>
                  <li className="flex justify-center items-center w-[120px] h-[60px] bg-white rounded-[0.8rem] ml-[0.6rem] md:w-[167px]  md:mt-[1.4rem]">
                    <a className="text-[#2081e2] font-semibold">Create</a>
                  </li>
                </ul>
              </div>
              <div className="learnmore flex hidden md:block md:flex md:mt-[2.7rem]">
                <img src={play} />
                <h4 className="font-semibold text-[16px] leading-[24px] text-[#2081e2] ml-2">
                  Learn more about OpenSea
                </h4>
              </div>
            </div>
            <div className="thecard ml-20 mr-20 flex flex-col  items-center justify-center  md:min-h-[100%] md:m-0 md:ml-auto  md:w-[50%]   md:max-w-[550px]  ">
              <div className=" cardd bigguy w-[355px] h-[299px] bg-blue-200 rounded-t-[0.6rem] md:w-[100%] md:max-w-[550px]   md:min-h-[100%] md:h-[420px]   md:mt-[15rem]  md:mt-[-1rem] md:mr-[100px]"></div>

              <div className=" cardd carddescription bg-white w-[355px] rounded-b-[0.5rem] flex justify-between items-center pt-[1.1rem] pb-2 md:w-[100%]  md:max-w-[550px]  md:mr-[100px] ">
                <div className="flex ml-4">
                  <div className="avatar flex w-[40px] h-[40px] rounded-[50%] pl-4 mr-4">
                    <img />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-semibold text-[14px] leading-[21px] text-[#04111d] ">
                      MIMI Basic #9
                    </h4>
                    <h4 className=" text-[14px] leading-[24px] text-[#2081e2] ">
                      Otograf
                    </h4>
                  </div>
                </div>

                <div className="flex mr-4">
                  <img src={info} className="info" />
                </div>
              </div>
            </div>
            <div className="learnmore flex ml-5 mt-9 mb-9 md:hidden">
              <img src={play} />
              <h4 className="font-semibold text-[16px] leading-[24px] text-[#2081e2] ml-2">
                Learn more about OpenSea
              </h4>
            </div>
          </div>
        </section>

        <sections className="notabledrops"></sections>
      </div>
    </div>
  );
};

export default Hero;
